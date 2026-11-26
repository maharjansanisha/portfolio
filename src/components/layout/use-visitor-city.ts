"use client";

import { useSyncExternalStore } from "react";

import { readVisitorLocation, visitorCityPath, type VisitorLocation } from "@/lib/visitor-city";

const timeoutMs = 4000;

type VisitorCity =
  | { status: "loading" }
  /** `location` is `null` when the lookup failed or returned nothing usable. */
  | { status: "ready"; location: VisitorLocation | null };

const loading: VisitorCity = { status: "loading" };

// Held in memory only: nothing is written to cookies or browser storage.
let state: VisitorCity = loading;
let lookup: Promise<void> | undefined;
const listeners = new Set<() => void>();

async function fetchLocation() {
  try {
    const response = await fetch(visitorCityPath, {
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutMs),
    });
    return response.ok ? readVisitorLocation(await response.json()) : null;
  } catch {
    // The location is optional: after any failure the header shows only the time.
    return null;
  }
}

async function loadLocation() {
  state = { status: "ready", location: await fetchLocation() };
  listeners.forEach((notify) => notify());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // The header shows the clock in two places; they share one request per page load.
  lookup ??= loadLocation();

  return () => {
    listeners.delete(onChange);
  };
}

const getSnapshot = (): VisitorCity => state;
const getServerSnapshot = (): VisitorCity => loading;

/** The lookup of the visitor's approximate city and that city's time zone. */
export function useVisitorCity() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
