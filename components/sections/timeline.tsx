import { experienceTimeline, type ExperienceEntry } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";

export function Timeline({ entries = experienceTimeline }: { entries?: ExperienceEntry[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent via-border-strong to-transparent sm:block"
      />
      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <Reveal key={entry.period} delay={i * 0.05}>
            <div className="relative grid grid-cols-1 gap-4 border-t border-border py-10 first:border-t-0 first:pt-0 sm:grid-cols-12 sm:gap-8 sm:pl-8">
              <span
                aria-hidden
                className="absolute left-0 top-1 hidden h-[15px] w-[15px] items-center justify-center sm:flex"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--raw-accent)_20%,transparent)]" : "border border-border-strong bg-background"}`}
                />
              </span>

              <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent sm:col-span-3">
                {entry.period}
              </span>
              <div className="sm:col-span-9">
                <h3 className="font-display text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {entry.summary}
                </p>
                <ul className="mt-5 flex flex-col gap-2">
                  {entry.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[13px] text-foreground-muted sm:text-sm">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
