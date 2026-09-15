import { motion } from "framer-motion";
import type { Project } from "../data/config";

const sizeClasses: Record<Project["size"], string> = {
  lg: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
  md: "sm:col-span-1 lg:col-span-6 lg:row-span-1",
  sm: "sm:col-span-1 lg:col-span-5 lg:row-span-1",
};

export function WorkCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <motion.a
      href="#contact"
      data-cursor="view"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative block min-h-[46vw] overflow-hidden rounded-sm border border-line sm:min-h-[26vw] lg:min-h-0 ${sizeClasses[project.size]}`}
      aria-label={`${project.name} — ${project.industry}. Placeholder case study.`}
    >
      <img
        src={project.image}
        alt={project.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/25 to-bg/10 transition-opacity duration-500 group-hover:from-bg/95" />

      <span className="absolute right-6 top-6 font-display text-sm tracking-[0.15em] text-muted">
        {project.index}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.industry}</p>
        <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{project.name}</h3>
        <p className="mt-2 max-w-xs translate-y-2 text-sm leading-relaxed text-muted opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:opacity-100 motion-reduce:translate-y-0">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}
