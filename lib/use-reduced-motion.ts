"use client";

import { useSyncExternalStore } from "react";

/**
 * Returns true when the user has requested reduced motion via the OS-level
 * `prefers-reduced-motion: reduce` setting. SSR-safe via useSyncExternalStore.
 */
const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const m = window.matchMedia(QUERY);
  m.addEventListener("change", callback);
  return () => m.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
