import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { usePointerFine } from "../hooks/usePointerFine";

type MagneticButtonProps = {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
};

/** Magnetic hover wrapper. Renders a `<button>` when `type` is set, an `<a>` otherwise. */
export function MagneticButton({
  href,
  target,
  rel,
  onClick,
  className = "",
  children,
  type,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const isFine = usePointerFine();
  const active = isFine && !reducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!active) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: springX, y: springY },
    "data-cursor": "view",
    className,
  };

  if (type) {
    return (
      <motion.button ref={btnRef} type={type} onClick={onClick} {...sharedProps}>
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a ref={ref} href={href} target={target} rel={rel} onClick={onClick} {...sharedProps}>
      {children}
    </motion.a>
  );
}
