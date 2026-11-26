"use client";

import { useLayoutEffect } from "react";

import { themeStorageKey } from "@/lib/theme";

function readSavedTheme() {
  try {
    return window.localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.dataset.theme ?? (prefersDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";

  root.dataset.theme = next;
  try {
    window.localStorage.setItem(themeStorageKey, next);
  } catch {
    // Storage can be unavailable; the choice then lasts for this visit.
  }
}

/** A switch on phones and a single dot from tablet, as in the reference. */
export function ThemeToggle() {
  // React's development remount clears the attribute set by the head script.
  useLayoutEffect(() => {
    const saved = readSavedTheme();
    if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved;
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      className="relative flex h-4.5 w-8 items-center justify-end rounded-full after:absolute after:-inset-x-1.5 after:-inset-y-3.5 tablet:h-7"
    >
      <span
        aria-hidden="true"
        className="block h-4.5 w-8 rounded-full bg-surface-hover p-0.5 tablet:hidden"
      >
        <span className="theme-knob block size-3.5 rounded-full bg-ink transition-[translate]" />
      </span>
      <span aria-hidden="true" className="hidden size-3.5 rounded-full bg-ink tablet:block" />
    </button>
  );
}
