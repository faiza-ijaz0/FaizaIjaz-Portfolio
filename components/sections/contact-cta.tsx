import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-[140px]"
        style={{ background: "var(--raw-glow-warm)" }}
      />
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{siteConfig.availability}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-7 max-w-3xl text-balance font-display text-[clamp(2rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-foreground">
            Have something worth building with real engineering behind it?
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
            Full product builds, technical problems worth solving, or engineering roles — every message reaches me
            directly.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10">
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            >
              Start a Conversation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
