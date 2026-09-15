import { motion } from "framer-motion";
import { siteConfig } from "../data/config";
import { MagneticButton } from "./MagneticButton";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-20">
      <img
        src="media/hero/skyline.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-bottom opacity-40 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/70" />
      <HeroVisual />

      <div className="container-edge relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-xs uppercase tracking-[0.32em] text-accent"
        >
          {siteConfig.agencyName} — Brand &amp; Digital Studio
        </motion.p>

        <h1 className="max-w-5xl font-display text-[13vw] font-bold leading-[0.88] tracking-tight sm:text-[10vw] lg:text-[7.2rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Work worth
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="block text-outline"
          >
            remembering.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-md text-base leading-relaxed text-muted"
        >
          {siteConfig.agencyName} partners with ambitious brands to build identities, products
          and campaigns people actually stop for — grounded in strategy, shaped by craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <MagneticButton
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-bg transition-colors hover:bg-accent"
          >
            Start a Project <span aria-hidden="true">→</span>
          </MagneticButton>
          <a
            href="#work"
            data-cursor="view"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg"
          >
            See the Work <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
