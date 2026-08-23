"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import heroImage from "@/public/bg-image.jpeg";

const nameLetters = "FAIZA IJAZ".split("");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.028, delayChildren: 0.1 } },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const roleLine = {
  hidden: { y: "115%" },
  show: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[76px]">
      {/* Layered cinematic background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20" style={{ background: "var(--raw-bg)" }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--raw-border) 1px, transparent 1px), linear-gradient(90deg, var(--raw-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 75% 65% at 30% 20%, black 30%, transparent 85%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] top-[-10%] -z-10 h-[560px] w-[560px] rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: "var(--raw-glow-warm)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] top-[25%] -z-10 h-[480px] w-[480px] rounded-full opacity-[0.22] blur-[140px]"
        style={{ background: "var(--raw-glow-cool)" }}
      />

      <Container className="grid grid-cols-1 items-center gap-16 py-24 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-16">
        {/* Left — identity + statement */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mb-7 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {siteConfig.availability}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={container}
            aria-label={siteConfig.name}
            className="flex flex-wrap font-mono text-sm uppercase tracking-[0.45em] text-accent sm:text-base"
          >
            {nameLetters.map((ch, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </motion.p>

          <h1 className="mt-3 font-display text-[clamp(3.25rem,9vw,8rem)] font-medium leading-[0.92] tracking-tight text-foreground">
            <span className="block overflow-hidden">
              <motion.span initial="hidden" animate="show" variants={roleLine} className="block">
                Software
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial="hidden"
                animate="show"
                variants={roleLine}
                transition={{ delay: 0.08 }}
                className="block italic text-transparent [-webkit-text-stroke:1.5px_var(--raw-fg)] sm:[-webkit-text-stroke:2px_var(--raw-fg)]"
              >
                Engineer
              </motion.span>
            </span>
          </h1>

          <motion.p
            custom={0.5}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-foreground-muted sm:text-xl"
          >
            {siteConfig.tagline} Four years of production engineering across frontend, backend, and AI-integrated
            systems.
          </motion.p>

          <motion.div custom={0.62} initial="hidden" animate="show" variants={fade} className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              href="/projects"
              size="lg"
              icon={<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            >
              View My Work
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Let&rsquo;s Work Together
            </Button>
          </motion.div>
        </div>

        {/* Right — image composition */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-[440px] lg:max-w-[480px]"
          >
            {/* offset frame behind image */}
            <div
              aria-hidden
              className="absolute -bottom-5 -right-5 h-full w-full rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg border border-border-strong"
            />
            {/* ambient glow directly behind the frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] opacity-40 blur-[60px]"
              style={{ background: "linear-gradient(135deg, var(--raw-accent) 0%, transparent 65%)" }}
            />

            <div className="relative overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg border border-border-strong bg-background-panel shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[3/2]">
                <Image
                  src={heroImage}
                  alt="Software development environment — code editor open on a laptop"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 440px, 90vw"
                  className="object-cover [filter:saturate(1.08)_contrast(1.06)]"
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

              {/* corner marks */}
              <div aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-accent/70" />
              <div aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-accent/70" />
            </div>

            {/* floating metadata chip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float absolute -bottom-6 left-4 flex items-center gap-2.5 rounded-full border border-border-strong bg-background/90 px-4 py-2.5 shadow-lg backdrop-blur-md sm:-left-6"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground">
                {siteConfig.experienceYears} Yrs &middot; Full-Stack Engineering
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float absolute -top-5 -right-3 flex flex-col items-center gap-1 rounded-2xl border border-border-strong bg-background/90 px-4 py-2.5 text-center shadow-lg backdrop-blur-md sm:right-2"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="font-display text-base font-medium leading-none text-accent">AI</span>
              <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.1em] text-foreground-subtle">
                Integrated
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
