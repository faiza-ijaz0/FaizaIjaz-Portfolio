import type { Service } from "@/data/services";
import { ServiceIcon } from "@/components/ui/service-icon";
import { Reveal } from "@/components/ui/reveal";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-background-elevated/60 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:p-9">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-3 -top-8 select-none font-display text-[6rem] font-medium leading-none text-foreground opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.06]"
        >
          {service.number}
        </span>

        <div className="relative flex items-start justify-between">
          <span className="font-mono text-xs text-accent">{service.number}</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground-subtle transition-all duration-500 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_20px_-6px_var(--raw-accent)]">
            <ServiceIcon icon={service.icon} className="h-[18px] w-[18px]" />
          </div>
        </div>

        <h3 className="relative mt-8 font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
          {service.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-foreground-muted">{service.description}</p>

        <ul className="relative mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2.5 text-[13px] text-foreground-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {cap}
            </li>
          ))}
        </ul>

        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-strong to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Reveal>
  );
}
