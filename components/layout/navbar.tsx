"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { GithubGlyph } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className={cn("border-b transition-colors duration-300", scrolled ? "border-border" : "border-transparent")}>
        <Container className="flex h-[76px] items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — Home`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
            <span className="font-display text-[13px] font-medium uppercase tracking-[0.22em] text-foreground sm:text-[15px]">
              Faiza <span className="text-accent">Ijaz</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-[13px] font-medium tracking-tight transition-colors duration-200",
                    active ? "text-foreground" : "text-foreground-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-[1px] left-0 right-0 h-px bg-accent"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            <Button
              href="/contact"
              variant="secondary"
              size="sm"
              className="hidden lg:inline-flex"
              icon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              Let&rsquo;s Talk
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center text-foreground lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[76px] bottom-0 z-40 flex flex-col overflow-y-auto bg-background lg:hidden"
          >
            <Container className="flex flex-1 flex-col justify-center gap-1 py-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between border-b border-border py-5 font-display text-4xl tracking-tight sm:text-5xl",
                      pathname === link.href ? "text-accent" : "text-foreground",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-6 w-6 text-foreground-subtle" />
                  </Link>
                </motion.div>
              ))}
            </Container>

            <Container className="flex items-center justify-between border-t border-border py-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-subtle">
                {siteConfig.availability}
              </p>
              <div className="flex items-center gap-5">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground-muted transition-colors hover:text-foreground">
                  <GithubGlyph className="h-4 w-4" />
                </a>
                <a href={socialLinks.email} aria-label="Email" className="text-foreground-muted transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
