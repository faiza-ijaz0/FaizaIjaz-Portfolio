import { cn } from "@/lib/utils";

function hashSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VIEW_W = 320;
const VIEW_H = 220;

function buildGraph(seed: number) {
  const rand = mulberry32(seed);
  const nodeCount = 5 + Math.floor(rand() * 3); // 5-7
  const cols = 3;
  const rows = Math.ceil(nodeCount / cols);
  const cellW = VIEW_W / cols;
  const cellH = VIEW_H / rows;

  const nodes = Array.from({ length: nodeCount }).map((_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jitterX = (rand() - 0.5) * cellW * 0.35;
    const jitterY = (rand() - 0.5) * cellH * 0.35;
    return {
      x: cellW * col + cellW / 2 + jitterX,
      y: cellH * row + cellH / 2 + jitterY,
      r: i === 0 ? 9 : 5 + rand() * 3,
      primary: i === 0,
    };
  });

  const edges: [number, number][] = [];
  for (let i = 1; i < nodes.length; i++) {
    const target = Math.floor(rand() * i);
    edges.push([i, target]);
  }
  if (nodes.length > 3) {
    const a = 1 + Math.floor(rand() * (nodes.length - 1));
    let b = 1 + Math.floor(rand() * (nodes.length - 1));
    if (b === a) b = ((b + 1) % (nodes.length - 1)) + 1;
    edges.push([a, b]);
  }

  return { nodes, edges };
}

export function ProjectVisual({
  slug,
  initials,
  className,
}: {
  slug: string;
  initials: string;
  className?: string;
}) {
  const hash = hashSlug(slug);
  const { nodes, edges } = buildGraph(hash);
  const angle = (hash % 12) * 15;

  return (
    <div
      className={cn("group/visual relative flex items-center justify-center overflow-hidden bg-background-panel", className)}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(var(--raw-accent) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(${angle}deg, var(--raw-accent) 0%, transparent 55%)`,
          mixBlendMode: "overlay",
        }}
      />

      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="relative h-full w-full" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => {
          const nA = nodes[a];
          const nB = nodes[b];
          return (
            <line
              key={i}
              x1={nA.x}
              y1={nA.y}
              x2={nB.x}
              y2={nB.y}
              stroke="var(--raw-accent)"
              strokeWidth={1}
              strokeOpacity={0.35}
              className="transition-all duration-700 [stroke-dasharray:4] group-hover/visual:stroke-opacity-70"
            />
          );
        })}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.primary ? "var(--raw-accent)" : "var(--raw-bg-panel)"}
            stroke="var(--raw-accent)"
            strokeWidth={n.primary ? 0 : 1.25}
            strokeOpacity={n.primary ? 1 : 0.7}
            fillOpacity={n.primary ? 0.9 : 1}
            className="transition-transform duration-500 origin-center group-hover/visual:scale-110"
            style={{ transformBox: "fill-box" }}
          />
        ))}
      </svg>

      <span className="absolute left-4 top-4 rounded-md border border-border-strong bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-accent backdrop-blur-sm">
        {initials}
      </span>

      <div aria-hidden className="absolute left-4 bottom-4 h-3 w-3 border-b border-l border-accent/50" />
      <div aria-hidden className="absolute right-4 top-4 h-3 w-3 border-t border-r border-accent/50" />
      <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
    </div>
  );
}
