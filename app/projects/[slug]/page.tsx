import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/ui/project-visual";
import { GithubGlyph } from "@/components/ui/icons";
import { getProjectInitials } from "@/lib/project-initials";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pb-16 pt-[calc(76px+4rem)] sm:pb-20 sm:pt-[calc(76px+6rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-10%] top-[-30%] -z-10 h-[440px] w-[440px] rounded-full opacity-[0.14] blur-[130px]"
          style={{ background: "var(--raw-glow-warm)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-[0%] -z-10 h-[380px] w-[380px] rounded-full opacity-[0.16] blur-[130px]"
          style={{ background: "var(--raw-glow-cool)" }}
        />
        <Container>
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              All Projects
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <Badge>{project.category}</Badge>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-balance font-display text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[1.03] tracking-tight text-foreground">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-foreground-muted sm:text-lg">
                  {project.description}
                </p>
              </Reveal>
              {(project.liveUrl || project.githubUrl) && (
                <Reveal delay={0.22}>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        external
                        icon={
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        }
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} external variant="secondary" icon={<GithubGlyph className="h-4 w-4" />}>
                        View Source
                      </Button>
                    )}
                  </div>
                </Reveal>
              )}
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <ProjectVisual
                  slug={project.slug}
                  initials={getProjectInitials(project.title)}
                  className="aspect-[4/3] w-full rounded-2xl"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="flex flex-col gap-16 lg:col-span-8">
              <ProjectSection title="Problem" text={project.problem} />
              <ProjectSection title="Approach" text={project.approach} />

              {project.architecture && project.architecture.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    Architecture &amp; Technical Decisions
                  </h2>
                  <ul className="mt-6 flex flex-col gap-4">
                    {project.architecture.map((point) => (
                      <li key={point} className="flex items-start gap-3 border-t border-border pt-4">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-foreground-muted sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    Key Features
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="rounded-xl border border-border p-5">
                        <p className="text-sm leading-relaxed text-foreground-muted sm:text-[15px]">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    Challenges &amp; Solutions
                  </h2>
                  <div className="mt-6 flex flex-col gap-8">
                    {project.challenges.map((item, i) => (
                      <div key={i} className="border-t border-border pt-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground-subtle">
                          Challenge
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">{item.challenge}</p>
                        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Solution</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted sm:text-base">
                          {item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.results && project.results.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    Outcome
                  </h2>
                  <ul className="mt-6 flex flex-col gap-4">
                    {project.results.map((point) => (
                      <li key={point} className="flex items-start gap-3 border-t border-border pt-4">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-foreground-muted sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!project.problem &&
                !project.approach &&
                !project.architecture?.length &&
                !project.features?.length &&
                !project.challenges?.length &&
                !project.results?.length && (
                  <div className="rounded-2xl border border-border p-8">
                    <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
                      Full case study details for this project are being finalized and will be added soon.
                    </p>
                  </div>
                )}
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-28 rounded-2xl border border-border p-8">
                {project.technologies.length > 0 && (
                  <>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
                      Technologies
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
                      Category
                    </p>
                  </>
                )}
                {project.technologies.length === 0 && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
                    Category
                  </p>
                )}
                <p className="mt-2 text-sm text-foreground-muted">{project.category}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-subtle">Next Project</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                {next.title}
              </h2>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Container>
      </section>
    </>
  );
}

function ProjectSection({ title, text }: { title: string; text?: string }) {
  if (!text) return null;
  return (
    <div>
      <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">{text}</p>
    </div>
  );
}
