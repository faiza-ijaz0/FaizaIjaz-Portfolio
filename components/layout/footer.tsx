"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { footerLinks } from "@/data/nav";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/container";
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/icons";

const socials = [
  { label: "GitHub", href: socialLinks.github, icon: GithubGlyph },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: LinkedinGlyph },
  { label: "Email", href: socialLinks.email, icon: Mail },
].filter((item) => item.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-14 lg:flex-row lg:items-start">
          <div className="max-w-sm">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
              <span className="font-display text-sm font-medium uppercase tracking-[0.22em] text-foreground">
                Faiza <span className="text-accent">Ijaz</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">{siteConfig.tagline}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">{siteConfig.availability}</p>
          </div>

          <div className="flex gap-16 sm:gap-24">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground-subtle">Navigate</p>
              <ul className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground-subtle">Connect</p>
              <ul className="flex flex-col gap-3">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      <item.icon className="h-3.5 w-3.5" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-foreground-subtle">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
