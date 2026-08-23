import { capabilities } from "@/data/capabilities";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CapabilityIcon } from "@/components/ui/capability-icon";
import { Reveal } from "@/components/ui/reveal";

export function Capabilities() {
  return (
    <section className="relative border-t border-border py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--raw-accent) 6%, transparent), transparent 70%)",
        }}
      />
      <Container>
        <SectionHeading
          kicker="How I Engineer"
          title="Engineering discipline, applied consistently."
          description="Not a list of tools — the working principles that shape every system I build, from first schema to production."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.number} delay={(i % 3) * 0.07} className="h-full">
              <div className="group relative h-full overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-background-elevated sm:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[6.5rem] font-medium leading-none text-foreground opacity-[0.035] transition-opacity duration-500 group-hover:opacity-[0.07]"
                >
                  {cap.number}
                </span>

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-accent transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_24px_-6px_var(--raw-accent)]">
                  <CapabilityIcon icon={cap.icon} className="h-[18px] w-[18px]" />
                </div>

                <h3 className="relative mt-8 font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {cap.title}
                </h3>
                <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted sm:text-[15px]">
                  {cap.description}
                </p>

                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-strong to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
