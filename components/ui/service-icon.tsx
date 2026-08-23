import { Code2, Database, Gauge, Layers, LayoutGrid, Server, ShoppingCart, Sparkles, Workflow } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<Service["icon"], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  layout: LayoutGrid,
  server: Server,
  sparkles: Sparkles,
  layers: Layers,
  database: Database,
  workflow: Workflow,
  gauge: Gauge,
  cart: ShoppingCart,
};

export function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} />;
}
