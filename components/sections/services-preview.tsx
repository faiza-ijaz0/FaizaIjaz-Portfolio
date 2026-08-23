import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/service-card";

export function ServicesPreview() {
  const preview = services.slice(0, 4);

  return (
    <section className="border-t border-border bg-background-elevated/30 py-28 sm:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Capabilities"
            title="Full ownership, from architecture to interface."
            description="Engineering support that spans the entire stack — engaged for a single system or the whole product."
          />
          <Link
            href="/services"
            className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent sm:inline-flex"
          >
            All services
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((service, i) => (
            <ServiceCard key={service.number} service={service} delay={i * 0.06} />
          ))}
        </div>

        <Link
          href="/services"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent sm:hidden"
        >
          All services
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Container>
    </section>
  );
}
