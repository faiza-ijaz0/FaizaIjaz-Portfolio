import { Layers, Puzzle, ShieldCheck, Sparkles, Timer, BadgeCheck } from "lucide-react";
import type { Capability } from "@/data/capabilities";

const iconMap: Record<Capability["icon"], React.ComponentType<{ className?: string }>> = {
  problem: Puzzle,
  architecture: Layers,
  quality: BadgeCheck,
  performance: Timer,
  security: ShieldCheck,
  ai: Sparkles,
};

export function CapabilityIcon({ icon, className }: { icon: Capability["icon"]; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
