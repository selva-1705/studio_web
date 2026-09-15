import { siteConfig, whatsappHref } from "../data/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <div className="container-edge flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <a href="#top" className="font-display text-sm font-medium tracking-[0.2em]" data-cursor="view">
          {siteConfig.logoMark}
          <span className="text-accent">/</span>
          {siteConfig.agencyName === "[YOUR AGENCY NAME]" ? "AGENCY" : siteConfig.agencyName.toUpperCase()}
        </a>

        <nav aria-label="Contact" className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:gap-8">
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-fg">
            {siteConfig.email}
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            WhatsApp
          </a>
          <a href={siteConfig.socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            {siteConfig.socialLinks.instagram.label}
          </a>
          <a href={siteConfig.socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            {siteConfig.socialLinks.linkedin.label}
          </a>
          <span>{siteConfig.location}</span>
        </nav>
      </div>

      <div className="container-edge mt-10 text-xs text-muted-2">
        © {year} {siteConfig.agencyName}. All rights reserved.
      </div>
    </footer>
  );
}
