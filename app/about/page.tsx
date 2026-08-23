import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/sections/timeline";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";
import heroImage from "@/public/bg-image.jpeg";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a Software Engineer with ${siteConfig.experienceYears} years of full-stack, cloud, and AI-integration experience.`,
};

const focusAreas = [
  "Full-Stack Development",
  "APIs & Databases",
  "Cloud & Deployment",
  "AI Integrations & Automation",
  "Testing & Debugging",
  "Performance & Security",
  "Software Architecture",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-[calc(76px+4.5rem)] sm:pb-16 sm:pt-[calc(76px+6rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-10%] top-[-15%] -z-10 h-[480px] w-[480px] rounded-full opacity-[0.14] blur-[130px]"
          style={{ background: "var(--raw-glow-warm)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-[8%] -z-10 h-[420px] w-[420px] rounded-full opacity-[0.18] blur-[140px]"
          style={{ background: "var(--raw-glow-cool)" }}
        />

        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">About</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium uppercase leading-[0.95] tracking-tight text-foreground">
                  Faiza Ijaz
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-accent sm:text-base">
                  Software Engineer
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-foreground">
                  I design and build complete, production-ready applications — from interface to backend
                  architecture — with a consistent focus on maintainability, performance, reliability, and user
                  experience.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-foreground-muted sm:text-base">
                  Four years of full-stack engineering across APIs, databases, authentication, and cloud
                  deployment, extended by AI integrations and automation. Comfortable owning a build end to
                  end — from architecture through implementation, testing, and deployment.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-muted"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.14}>
                <div className="relative mx-auto max-w-[380px]">
                  <div
                    aria-hidden
                    className="absolute -bottom-4 -right-4 h-full w-full rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg border border-border-strong"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-5 -z-10 rounded-[3rem] opacity-30 blur-[50px]"
                    style={{ background: "linear-gradient(135deg, var(--raw-accent) 0%, transparent 65%)" }}
                  />
                  <div className="relative overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg border border-border-strong bg-background-panel shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={heroImage}
                        alt="Software development environment"
                        fill
                        sizes="(min-width: 1024px) 380px, 80vw"
                        className="object-cover [filter:saturate(1.05)_contrast(1.05)]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(200deg, transparent 40%, color-mix(in srgb, var(--raw-bg-panel) 65%, transparent) 100%)",
                        }}
                      />
                    </div>
                    <div aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-accent/70" />
                    <div aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-accent/70" />
                  </div>
                  <div className="absolute -bottom-5 left-4 flex items-center gap-2.5 rounded-full border border-border-strong bg-background/90 px-4 py-2.5 shadow-lg backdrop-blur-md sm:-left-6">
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground">
                      {siteConfig.experienceYears} Years &middot; Full-Stack Engineering
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <SectionHeading kicker="Trajectory" title="Career journey." />
          <div className="mt-10">
            <Timeline />
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <SectionHeading kicker="Toolkit" title="Everything I build with." className="max-w-xl" />
            <Link
              href="/skills"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Full skill system
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
