import { RevealText } from "./RevealText";

const statements = ["Strategy first.", "Design with purpose.", "Experiences that stay."];

export function PointOfView() {
  return (
    <section id="about" aria-label="Point of view" className="border-t border-line py-28 md:py-40">
      <div className="container-edge flex flex-col gap-3 md:gap-5">
        {statements.map((line, i) => (
          <RevealText
            key={line}
            as="h2"
            delay={i * 0.12}
            className="font-display text-[10vw] font-bold leading-[0.95] tracking-tight text-fg sm:text-[6vw] lg:text-[4.4rem]"
          >
            {line}
          </RevealText>
        ))}
      </div>
    </section>
  );
}
