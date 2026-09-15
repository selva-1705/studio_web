import { motion, useReducedMotion } from "framer-motion";

/**
 * Original abstract mark used in place of stock photography/video —
 * a set of concentric rings and an orbiting node, slowly rotating.
 */
export function HeroVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <motion.svg
        viewBox="0 0 600 600"
        className="h-[70vmin] w-[70vmin] opacity-70 md:h-[52vmin] md:w-[52vmin]"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={reducedMotion ? undefined : { duration: 90, ease: "linear", repeat: Infinity }}
      >
        <circle cx="300" cy="300" r="280" fill="none" stroke="#232324" strokeWidth="1" />
        <circle cx="300" cy="300" r="200" fill="none" stroke="#232324" strokeWidth="1" />
        <circle cx="300" cy="300" r="120" fill="none" stroke="#d6ff3f" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="300" cy="20" r="5" fill="#d6ff3f" />
        <circle cx="580" cy="300" r="3" fill="#f5f4f0" fillOpacity="0.5" />
      </motion.svg>
      <motion.svg
        viewBox="0 0 600 600"
        className="absolute h-[70vmin] w-[70vmin] md:h-[52vmin] md:w-[52vmin]"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={reducedMotion ? undefined : { duration: 130, ease: "linear", repeat: Infinity }}
      >
        <circle cx="300" cy="300" r="240" fill="none" stroke="#232324" strokeWidth="1" strokeDasharray="2 10" />
      </motion.svg>
    </div>
  );
}
