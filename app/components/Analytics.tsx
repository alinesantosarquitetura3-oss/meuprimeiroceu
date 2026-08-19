"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (gaId) {
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
    if (metaId) {
      const win = window as typeof window & { fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string } };
      if (!win.fbq) {
        const fbq = ((...args: unknown[]) => fbq.queue?.push(args)) as typeof win.fbq;
        if (fbq) { fbq.queue = []; fbq.loaded = true; fbq.version = "2.0"; win.fbq = fbq; }
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://connect.facebook.net/en_US/fbevents.js";
        document.head.appendChild(script);
      }
      win.fbq?.("init", metaId);
      win.fbq?.("track", "PageView");
    }
  }, []);
  return null;
}
