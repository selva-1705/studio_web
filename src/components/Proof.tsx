import { clients, proofStatement, recognition, testimonials } from "../data/config";
import { RevealText } from "./RevealText";

export function Proof() {
  return (
    <section className="border-t border-line py-28 md:py-40">
      <div className="container-edge">
        <RevealText as="p" className="max-w-xl font-display text-2xl font-medium leading-snug sm:text-3xl">
          {proofStatement}
        </RevealText>

        <div className="mt-14 md:mt-16">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-2">Selected Clients</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.label}
                className="flex h-20 items-center justify-center rounded-sm border border-dashed border-line text-xs uppercase tracking-[0.15em] text-muted-2"
              >
                {client.label}
              </div>
            ))}
          </div>
        </div>

        {recognition.length > 0 && (
          <div className="mt-14 md:mt-16">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-2">Selected Recognition</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {recognition.map((item) => (
                <div
                  key={item.label}
                  className="flex h-20 items-center justify-center rounded-sm border border-dashed border-line text-xs uppercase tracking-[0.15em] text-muted-2"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 grid gap-10 border-t border-line pt-16 md:mt-24 md:grid-cols-2 md:pt-20">
          {testimonials.map((testimonial, i) => (
            <RevealText key={testimonial.author + i} delay={i * 0.1} className="flex flex-col gap-6">
              <p className="font-display text-xl italic leading-snug text-muted sm:text-2xl">
                “{testimonial.quote}”
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-2">
                {testimonial.author} — {testimonial.role}
              </p>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
