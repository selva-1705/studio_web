import { useState, type FormEvent } from "react";
import { siteConfig, whatsappHref } from "../data/config";
import { MagneticButton } from "./MagneticButton";
import { RevealText } from "./RevealText";

/**
 * Static-site contact form: no backend is available, so submitting
 * opens the visitor's email client with the fields pre-filled. Swap
 * `handleSubmit` for a service like Formspree/Netlify Forms once one
 * is wired up.
 */
export function FinalCTA() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const project = String(data.get("project") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`New project inquiry — ${name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject: ${project}\n\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-line py-28 md:py-40">
      <div className="container-edge">
        <RevealText
          as="h2"
          className="font-display text-[13vw] font-bold uppercase leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[6.5rem]"
        >
          Let&apos;s make
          <br />
          something
          <br />
          <span className="text-accent">impossible to ignore.</span>
        </RevealText>

        <RevealText delay={0.15} className="mt-10 flex flex-wrap items-center gap-5">
          <MagneticButton
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-bg transition-colors hover:bg-accent"
          >
            Start a Project <span aria-hidden="true">→</span>
          </MagneticButton>
          <MagneticButton
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-fg/25 px-7 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
          >
            WhatsApp
          </MagneticButton>
        </RevealText>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="mt-24 grid max-w-2xl gap-6 border-t border-line pt-16 md:mt-32"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" name="name" type="text" autoComplete="name" required />
            <Field label="Email" name="email" type="email" autoComplete="email" required />
          </div>
          <Field label="Project" name="project" type="text" />
          <div>
            <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full resize-none border-b border-line bg-transparent py-3 text-fg outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <MagneticButton
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-fg/25 px-7 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
            >
              Send Message <span aria-hidden="true">→</span>
            </MagneticButton>
            {sent && (
              <p role="status" className="text-xs uppercase tracking-[0.1em] text-muted">
                Opening your email client…
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full border-b border-line bg-transparent py-3 text-fg outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
