// Single source of truth for editable content. Replace every
// bracketed `[YOUR ...]` placeholder with real values — everything
// else in the codebase reads from here.

export const siteConfig = {
  agencyName: "[YOUR AGENCY NAME]",
  logoMark: "Y", // single-letter mark shown in the nav/footer logo
  tagline: "[YOUR TAGLINE]",

  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  whatsappNumber: "[YOUR NUMBER]", // digits only, e.g. "14155550123", used to build the wa.me link
  location: "[YOUR LOCATION]",

  socialLinks: {
    instagram: { label: "[YOUR INSTAGRAM]", url: "#" },
    linkedin: { label: "[YOUR LINKEDIN]", url: "#" },
  },

  seo: {
    title: "[YOUR AGENCY NAME] — Brand & Digital Studio",
    description:
      "[YOUR AGENCY NAME] is a brand and digital experience studio. [YOUR TAGLINE]",
  },
};

export const whatsappHref = () => {
  const digits = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  return digits ? `https://wa.me/${digits}` : "#";
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  index: string;
  name: string;
  industry: string;
  description: string;
  size: "lg" | "md" | "sm";
  image: string;
  alt: string;
};

// Placeholder work, illustrated with real (freely licensed, locally
// hosted) photography — see public/media/projects/CREDITS.md for
// sourcing. Swap `name`, `industry`, `description` and `image` as
// real case studies come in.
export const projects: Project[] = [
  {
    index: "01",
    name: "Project Aperture",
    industry: "Brand Identity",
    description: "A new visual language for a modern consumer brand.",
    size: "lg",
    image: "media/projects/aperture.jpg",
    alt: "Minimal architectural facade in warm concrete tones, sharp geometric shadow",
  },
  {
    index: "02",
    name: "Project Meridian",
    industry: "Web & Digital",
    description: "A digital flagship built for speed and storytelling.",
    size: "sm",
    image: "media/projects/meridian.jpg",
    alt: "Close-up of a laptop screen showing an abstract dark interface",
  },
  {
    index: "03",
    name: "Project Northline",
    industry: "Creative Campaign",
    description: "A launch campaign designed to travel across every channel.",
    size: "sm",
    image: "media/projects/northline.jpg",
    alt: "Bold graphic print poster pinned to a studio wall",
  },
  {
    index: "04",
    name: "Project Fathom",
    industry: "Brand Strategy",
    description: "Positioning and voice for a category-defining challenger.",
    size: "md",
    image: "media/projects/fathom.jpg",
    alt: "Textured charcoal-grey paper surface, soft directional light",
  },
  {
    index: "05",
    name: "Project Cinder",
    industry: "Brand Identity",
    description: "An identity system built to flex across product and place.",
    size: "md",
    image: "media/projects/cinder.jpg",
    alt: "Stack of matte black product packaging on a concrete surface",
  },
  {
    index: "06",
    name: "Project Halide",
    industry: "Web & Digital",
    description: "An interface rebuilt around clarity and quiet confidence.",
    size: "lg",
    image: "media/projects/halide.jpg",
    alt: "Monochrome editorial photograph of a modern glass stairwell",
  },
];

export type Service = {
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  { index: "01", title: "Brand Strategy", description: "Positioning, voice and narrative built on a clear point of view." },
  { index: "02", title: "Brand Identity", description: "Visual systems designed to hold up across every surface." },
  { index: "03", title: "Web & Digital", description: "Interfaces and sites engineered for speed and impact." },
  { index: "04", title: "Creative Campaigns", description: "Ideas built to travel, from launch film to last banner." },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { index: "01", title: "Discover", description: "We start by understanding the business, the market and the gap." },
  { index: "02", title: "Define", description: "We shape a strategy and a point of view worth building on." },
  { index: "03", title: "Create", description: "We design the identity, product or campaign end to end." },
  { index: "04", title: "Launch", description: "We ship it, measure it, and keep it sharp." },
];

export type ClientPlaceholder = { label: string };
export type Recognition = { label: string };
export type Testimonial = { quote: string; author: string; role: string };

// No real logos supplied yet — shown as clearly labelled placeholder
// marks. Replace `label` with a client name (or swap the block for a
// real logo image) once available.
export const clients: ClientPlaceholder[] = [
  { label: "Client 01" },
  { label: "Client 02" },
  { label: "Client 03" },
  { label: "Client 04" },
  { label: "Client 05" },
  { label: "Client 06" },
];

// Optional — leave empty until there's a real award/press mention to list.
export const recognition: Recognition[] = [];

// No real testimonials supplied yet — do not fabricate quotes.
export const testimonials: Testimonial[] = [
  { quote: "[Testimonial placeholder — add a real client quote here.]", author: "[Client Name]", role: "[Role, Company]" },
  { quote: "[Testimonial placeholder — add a real client quote here.]", author: "[Client Name]", role: "[Role, Company]" },
];

export const proofStatement = "Selected work across branding, digital and creative.";
