"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    setLight(next);
  }

  return (
    <button
      onClick={toggle}
      className="text-gray-9 transition-colors hover:text-gray-12"
      aria-label="Toggle theme"
    >
      {light ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
    </button>
  );
}
