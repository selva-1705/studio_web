import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, siteConfig } from "../data/config";
import { MagneticButton } from "./MagneticButton";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigateTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    history.pushState(null, "", href);
  };

  // The mobile menu's collapse is an animated `height: "auto"` exit.
  // Framer Motion measures that by briefly resetting window scroll to
  // (0, 0), which cancels a scroll started in the same tick. Stash the
  // target and navigate only once that exit animation has actually
  // finished (see `onExitComplete` below).
  const handleMobileNavClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    pendingHref.current = href;
    setMenuOpen(false);
  };

  const handleMenuExitComplete = () => {
    if (pendingHref.current) {
      navigateTo(pendingHref.current);
      pendingHref.current = null;
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-edge flex h-20 items-center justify-between">
        <a href="#top" className="font-display text-sm font-medium tracking-[0.2em]" data-cursor="view">
          {siteConfig.logoMark}
          <span className="text-accent">/</span>
          {siteConfig.agencyName === "[YOUR AGENCY NAME]" ? "AGENCY" : siteConfig.agencyName.toUpperCase()}
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="view"
              className="text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticButton
          href="#contact"
          className="hidden rounded-full border border-fg/25 px-5 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent md:inline-flex"
        >
          Start a Project
        </MagneticButton>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-fg transition-transform duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-fg transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-fg transition-transform duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence onExitComplete={handleMenuExitComplete}>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <div className="container-edge flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileNavClick(link.href)}
                  className="border-b border-line py-4 text-lg uppercase tracking-[0.1em] text-muted last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleMobileNavClick("#contact")}
                className="mt-2 mb-2 rounded-full border border-accent px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-accent"
              >
                Start a Project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
