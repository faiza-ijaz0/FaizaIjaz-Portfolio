import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-[calc(76px+5rem)] sm:pb-20 sm:pt-[calc(76px+7rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[-30%] -z-10 h-[440px] w-[440px] rounded-full opacity-[0.14] blur-[130px]"
        style={{ background: "var(--raw-glow-warm)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[0%] -z-10 h-[380px] w-[380px] rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: "var(--raw-glow-cool)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--raw-border) 1px, transparent 1px), linear-gradient(90deg, var(--raw-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 25% 15%, black 30%, transparent 85%)",
        }}
      />
      <Container>
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">{kicker}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-foreground">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
