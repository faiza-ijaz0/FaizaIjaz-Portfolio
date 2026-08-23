import type { Metadata } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/sections/service-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: `Software engineering services from ${siteConfig.name} — full-stack development, AI integration, backend architecture, and performance optimization.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-24 pt-[calc(76px+5rem)] sm:pb-32 sm:pt-[calc(76px+7rem)]">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.number} service={service} delay={(i % 3) * 0.06} />
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start gap-6 border-t border-border pt-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Not sure which of these applies?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
                Most engagements start with a conversation about the problem, not a service tier.
              </p>
            </div>
            <Button href="/contact" size="lg">
              Start a conversation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
