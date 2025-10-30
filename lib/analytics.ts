"use client";
import va from "@vercel/analytics";
import * as Sentry from "@sentry/nextjs";

export type AppEvent =
  | "cta_click"
  | "briefing_start"
  | "briefing_submit"
  | "portfolio_view"
  | "blog_read"
  | "scroll_depth";

export function trackEvent(name: AppEvent, props?: Record<string, any>) {
  try {
    va.track(name, props);
  } catch (e) {
    // noop
  }
  try {
    Sentry.addBreadcrumb({ category: "analytics", message: name, data: props });
  } catch (e) {
    // noop
  }
}