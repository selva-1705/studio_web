import { projects } from "../data/config";
import { WorkCard } from "./WorkCard";
import { RevealText } from "./RevealText";

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-line py-28 md:py-40">
      <div className="container-edge">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <RevealText as="h2" className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Selected Work
          </RevealText>
          <RevealText delay={0.1} className="max-w-sm text-sm leading-relaxed text-muted">
            A short list of placeholder projects — swap them out in{" "}
            <code className="text-fg">src/data/config.ts</code> as real case studies come in.
          </RevealText>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:[grid-auto-flow:dense] lg:auto-rows-[15vw]">
          {projects.map((project, i) => (
            <WorkCard key={project.index} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
