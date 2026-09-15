import { useEffect } from "react";
import { siteConfig } from "../data/config";

/** Injects an Organization JSON-LD block so search engines can parse the brand facts. */
export function StructuredData() {
  useEffect(() => {
    const sameAs = Object.values(siteConfig.socialLinks)
      .map((link) => link.url)
      .filter((url) => url && url !== "#");

    const data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.agencyName,
      description: siteConfig.seo.description,
      email: siteConfig.email,
      ...(sameAs.length ? { sameAs } : {}),
      ...(siteConfig.location && !siteConfig.location.startsWith("[")
        ? { address: siteConfig.location }
        : {}),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
