"use client";

import { useSyncExternalStore } from "react";

import { visitorCityPath, type VisitorCityResponse } from "@/lib/visitor-city";

const timeoutMs = 4000;

// Held in memory only: nothing is written to cookies or browser storage.
let city: string | null = null;
let lookup: Promise<void> | undefined;
const listeners = new Set<() => void>();

async function loadCity() {
  try {
    const response = await fetch(visitorCityPath, {
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!response.ok) return;

    const body = (await response.json()) as Partial<VisitorCityResponse> | null;
    if (typeof body?.city !== "string") return;

    city = body.city;
    listeners.forEach((notify) => notify());
  } catch {
    // The city is optional: after any failure the header shows only the time.
  }
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // The header shows the city in two places; they share one request per page load.
  lookup ??= loadCity();

  return () => {
    listeners.delete(onChange);
  };
}

const getSnapshot = () => city;
const getServerSnapshot = () => null;

/** The visitor's approximate city, or `null` while loading or when unknown. */
export function useVisitorCity() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
