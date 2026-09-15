import { motion } from "framer-motion";
import { processSteps } from "../data/config";
import { RevealText } from "./RevealText";

export function Process() {
  return (
    <section className="border-t border-line py-28 md:py-40">
      <div className="container-edge">
        <RevealText as="h2" className="mb-16 font-display text-4xl font-bold tracking-tight sm:text-6xl md:mb-24">
          Process
        </RevealText>

        <div className="relative">
          {/* connecting line — vertical on mobile, horizontal on desktop */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[7px] top-2 h-full w-px bg-line md:hidden"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-2 hidden h-px bg-line md:block"
          />

          <ol className="flex flex-col gap-10 md:flex-row md:gap-6">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 pl-8 md:pl-0 md:pt-10"
              >
                <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg md:top-[-6px]" />
                <p className="font-display text-sm text-muted">{step.index}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-muted">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
