import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { Capabilities } from "@/components/sections/capabilities";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ServicesPreview } from "@/components/sections/services-preview";
import { JourneyPreview } from "@/components/sections/journey-preview";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Capabilities />
      <SkillsPreview />
      <ServicesPreview />
      <JourneyPreview />
      <ContactCta />
    </>
  );
}
