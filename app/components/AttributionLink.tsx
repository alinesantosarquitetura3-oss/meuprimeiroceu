"use client";

import { MouseEvent, ReactNode, useEffect, useState } from "react";

const ATTRIBUTION_KEY = "meu_primeiro_ceu_attribution";
const clickIds = new Set(["fbclid", "gclid", "ttclid", "msclkid"]);

function readAttribution() {
  const saved = (() => {
    try { return JSON.parse(localStorage.getItem(ATTRIBUTION_KEY) || "{}"); }
    catch { return {}; }
  })() as Record<string, string>;
  const current = new URLSearchParams(window.location.search);
  current.forEach((value, key) => {
    if (key.startsWith("utm_") || clickIds.has(key)) saved[key] = value;
  });
  localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(saved));
  return saved;
}

export function AttributionCapture() {
  useEffect(() => {
    const attribution = readAttribution();
    const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ||= []);
    dataLayer.push({ event: "landing_view", ...attribution });
  }, []);
  return null;
}

export function CheckoutLink({ href, product, value, className, children }: {
  href: string;
  product: "Light" | "Plus";
  value: number;
  className?: string;
  children: ReactNode;
}) {
  const [trackedHref, setTrackedHref] = useState(href);

  useEffect(() => {
    const destination = new URL(href);
    const attribution = readAttribution();
    Object.entries(attribution).forEach(([key, val]) => destination.searchParams.set(key, val));
    destination.searchParams.set("produto", `meu-primeiro-ceu-${product.toLowerCase()}`);
    setTrackedHref(destination.toString());
  }, [href, product]);

  function trackCheckout(event: MouseEvent<HTMLAnchorElement>) {
    const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ||= []);
    dataLayer.push({
      event: "begin_checkout",
      ecommerce: {
        currency: "BRL",
        value,
        items: [{ item_name: `Meu Primeiro Céu ${product}`, item_variant: product, price: value, quantity: 1 }],
      },
      checkout_url: trackedHref,
    });
    const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "InitiateCheckout", { content_name: `Meu Primeiro Céu ${product}`, currency: "BRL", value });
    if (!event.defaultPrevented) sessionStorage.setItem("last_checkout_variant", product);
  }

  return <a className={className} href={trackedHref} onClick={trackCheckout}>{children}</a>;
}
