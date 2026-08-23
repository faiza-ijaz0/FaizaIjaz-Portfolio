import { Braces, Layers3, Sparkles, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

const facts = [
  { icon: Target, label: `${siteConfig.experienceYears} Years`, detail: "Production engineering experience" },
  { icon: Layers3, label: "Full-Stack", detail: "Frontend, backend, and infrastructure" },
  { icon: Sparkles, label: "AI-Integrated", detail: "Intelligent features built into real products" },
  { icon: Braces, label: "Production Mindset", detail: "Built to ship, not to demo" },
];

export function Positioning() {
  return (
    <section className="py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Positioning</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-balance font-display text-[clamp(1.85rem,4.2vw,3.25rem)] font-medium leading-[1.12] tracking-tight text-foreground">
                I build software with engineering discipline{" "}
                <span className="text-foreground-muted">and product thinking.</span>
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-lg text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
                Four years of full-stack delivery — frontend interfaces, backend systems, and the AI-integrated
                features between them — approached with the same rigor a production incident would demand, applied
                from day one instead of after the fact.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col">
              {facts.map((fact, i) => (
                <Reveal key={fact.label} delay={0.1 + i * 0.06}>
                  <div className="flex items-start gap-4 border-t border-border py-5 first:border-t-0 lg:first:border-t lg:first:pt-0">
                    <fact.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="font-display text-base font-medium text-foreground">{fact.label}</p>
                      <p className="mt-0.5 text-[13px] text-foreground-muted">{fact.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
