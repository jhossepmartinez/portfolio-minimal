"use client";

import { useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("light");
  });

  function toggle() {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    setLight(next);
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-2 text-gray-10 transition-colors hover:bg-gray-3 hover:text-gray-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-8 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1"
      aria-label="Toggle theme"
    >
      {light ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
    </button>
  );
}
