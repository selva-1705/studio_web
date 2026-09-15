import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../data/config";
import { RevealText } from "./RevealText";

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="border-t border-line py-28 md:py-40">
      <div className="container-edge">
        <RevealText as="h2" className="mb-16 font-display text-4xl font-bold tracking-tight sm:text-6xl md:mb-20">
          Services
        </RevealText>

        <ul>
          {services.map((service, i) => (
            <li
              key={service.index}
              className="group relative border-t border-line py-8 last:border-b md:py-10"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-10">
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-display text-sm text-muted">{service.index}</span>
                  <h3 className="font-display text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                    {service.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
                  {service.description}
                </p>
              </div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 -z-10 bg-accent/5"
                initial={false}
                animate={{ width: activeIndex === i ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
