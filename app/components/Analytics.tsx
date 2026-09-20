"use client";

import { useEffect, useSyncExternalStore } from "react";

const CONSENT_KEY = "meu_primeiro_ceu_analytics_consent";
const CONSENT_EVENT = "meu-primeiro-ceu-consent-change";
type ConsentState = "accepted" | "rejected" | "pending";

function subscribeConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getConsentSnapshot(): ConsentState {
  const saved = localStorage.getItem(CONSENT_KEY);
  return saved === "accepted" || saved === "rejected" ? saved : "pending";
}

function loadAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (gaId && !document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
    const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ||= []);
    const gtag = (...args: unknown[]) => dataLayer.push(args);
    gtag("js", new Date());
    gtag("config", gaId);
  }

  const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!metaId) return;

  type MetaPixel = ((...args: unknown[]) => void) & {
    queue?: unknown[];
    loaded?: boolean;
    version?: string;
  };
  const win = window as typeof window & { fbq?: MetaPixel; __mpcMetaInitialized?: boolean };
  if (!win.fbq) {
    const fbq: MetaPixel = (...args: unknown[]) => fbq.queue?.push(args);
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    win.fbq = fbq;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  if (!win.__mpcMetaInitialized) {
    win.fbq?.("init", metaId);
    win.fbq?.("track", "PageView");
    win.__mpcMetaInitialized = true;
  }
}

export default function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => "pending");

  useEffect(() => {
    if (consent === "accepted") loadAnalytics();
  }, [consent]);

  function choose(next: Exclude<ConsentState, "pending">) {
    localStorage.setItem(CONSENT_KEY, next);
    if (next === "rejected" && (window as typeof window & { __mpcMetaInitialized?: boolean }).__mpcMetaInitialized) {
      window.location.reload();
      return;
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  return (
    <>
      {consent === "pending" ? (
        <aside className="cookieBanner" role="dialog" aria-label="Preferências de cookies" aria-live="polite">
          <div>
            <strong>Sua privacidade importa</strong>
            <p>Usamos cookies opcionais de medição e publicidade para entender visitas e melhorar nossas campanhas. Você pode aceitar ou continuar sem eles.</p>
            <a href="/privacidade">Leia a Política de Privacidade</a>
          </div>
          <div className="cookieActions">
            <button type="button" className="cookieSecondary" onClick={() => choose("rejected")}>Continuar sem aceitar</button>
            <button type="button" className="button" onClick={() => choose("accepted")}>Aceitar cookies</button>
          </div>
        </aside>
      ) : (
        <button type="button" className="cookieSettings" onClick={() => {
          localStorage.removeItem(CONSENT_KEY);
          window.dispatchEvent(new Event(CONSENT_EVENT));
        }}>Preferências de cookies</button>
      )}
    </>
  );
}
