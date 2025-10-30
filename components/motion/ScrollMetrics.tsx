"use client";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function ScrollMetrics() {
  const fired = useRef<{ [k: number]: boolean }>({});
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const cur = window.scrollY;
      const pct = Math.max(0, Math.min(1, cur / (max || 1)));
      const thresholds = [0.25, 0.5, 0.75, 0.9];
      for (const t of thresholds) {
        if (pct >= t && !fired.current[t]) {
          fired.current[t] = true;
          trackEvent("scroll_depth", { percent: Math.round(t * 100) });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}