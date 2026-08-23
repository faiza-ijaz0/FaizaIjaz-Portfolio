"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/layout/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative flex h-8 w-[52px] shrink-0 items-center rounded-full border border-border-strong bg-background-elevated px-[3px] transition-colors duration-300 hover:border-accent/60"
    >
      <Sun className="pointer-events-none absolute left-[7px] h-3 w-3 text-foreground-subtle" aria-hidden />
      <Moon className="pointer-events-none absolute right-[7px] h-3 w-3 text-foreground-subtle" aria-hidden />
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_14px_-2px_var(--raw-accent)]"
        style={{ marginLeft: isDark ? "auto" : 0 }}
      >
        {isDark ? <Moon className="h-3 w-3" aria-hidden /> : <Sun className="h-3 w-3" aria-hidden />}
      </motion.span>
    </button>
  );
}
