import { skillGroups, type SkillGroup } from "@/data/skills";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SkillsGrid({ groups = skillGroups }: { groups?: SkillGroup[] }) {
  const isOddCount = groups.length % 2 === 1;

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
      {groups.map((group, i) => {
        const isLastOdd = isOddCount && i === groups.length - 1;
        return (
          <Reveal key={group.category} delay={(i % 2) * 0.06} className={cn("h-full", isLastOdd && "md:col-span-2")}>
            <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-background-elevated sm:p-9">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-accent">{group.number}</span>
                <h3 className="font-display text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {group.category}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-strong px-3 py-1.5 font-mono text-[11px] text-foreground-muted transition-colors duration-300 group-hover:border-accent/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
