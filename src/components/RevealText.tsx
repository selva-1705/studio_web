import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type Tag = "div" | "h1" | "h2" | "h3" | "p" | "span";

type RevealTextProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TAGS = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

/** Fades/slides content up into place the first time it enters the viewport. */
export function RevealText({ children, as = "div", className = "", delay = 0 }: RevealTextProps) {
  const MotionTag = TAGS[as];
  return (
    <MotionTag
      className={className}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </MotionTag>
  );
}
