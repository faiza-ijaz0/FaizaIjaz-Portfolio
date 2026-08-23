import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {kicker && (
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">{kicker}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="text-balance font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.08] tracking-tight text-foreground">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
