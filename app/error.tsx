"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[calc(100svh-76px)] items-center pt-[76px]">
      <Container className="py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Error</p>
        <h1 className="mt-6 max-w-xl text-balance font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight text-foreground">
          Something broke on this page.
        </h1>
        <p className="mt-4 max-w-md text-sm text-foreground-muted">
          An unexpected error occurred while rendering this view. Try again, or head back home.
        </p>
        <Button type="button" onClick={reset} className="mt-8">
          Try again
        </Button>
      </Container>
    </section>
  );
}
