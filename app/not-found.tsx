import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100svh-76px)] items-center pt-[76px]">
      <Container className="py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-6 max-w-2xl text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-foreground">
          This route doesn&rsquo;t exist. Unlike everything else here, it wasn&rsquo;t built on purpose.
        </h1>
        <Button
          href="/"
          size="lg"
          className="mt-10"
          icon={<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
        >
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
