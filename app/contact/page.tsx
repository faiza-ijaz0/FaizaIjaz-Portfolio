import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GithubGlyph, LinkedinGlyph } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} to discuss a project, engagement, or engineering role.`,
};

const channels = [
  { label: "Email", value: siteConfig.email, href: socialLinks.email, icon: Mail },
  { label: "GitHub", value: "github.com/faiza-ijaz0", href: socialLinks.github, icon: GithubGlyph },
  socialLinks.linkedin
    ? { label: "LinkedIn", value: "linkedin.com/in/faiza-ijjaz", href: socialLinks.linkedin, icon: LinkedinGlyph }
    : null,
].filter(Boolean) as { label: string; value: string; href: string; icon: React.ComponentType<{ className?: string }> }[];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-[calc(76px+4.5rem)] sm:pb-16 sm:pt-[calc(76px+6rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-25%] -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[150px]"
          style={{ background: "var(--raw-glow-warm)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(var(--raw-border) 1px, transparent 1px), linear-gradient(90deg, var(--raw-border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 10%, black 30%, transparent 85%)",
          }}
        />

        <Container>
          <Reveal>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">Contact</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium uppercase leading-[0.98] tracking-tight text-foreground">
              Let&rsquo;s build something great.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
              Available for software engineering opportunities, product development, and interesting technical
              projects.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 0.08} className="h-full">
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col justify-between gap-8 bg-background p-7 transition-colors duration-500 hover:bg-background-elevated sm:p-8"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground-subtle transition-all duration-500 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_20px_-6px_var(--raw-accent)]">
                    <channel.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
                      {channel.label}
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 font-display text-lg font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-xl">
                      {channel.value}
                      <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                        &rarr;
                      </span>
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border px-7 py-5">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{siteConfig.availability}</p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
