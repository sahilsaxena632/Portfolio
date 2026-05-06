export const siteConfig = {
  name: "Sahil Saxena",
  firstName: "Sahil",
  lastName: "Saxena",
  role: "Software Engineer",
  discipline: "Backend & Cloud-Native Systems",
  location: "Faridabad, India",
  status: {
    label: "Open to opportunities",
    available: true,
  },
  contact: {
    email: "sahil.saxena.29634@gmail.com",
    phone: "+91 8130508320",
    links: {
      github: "[EDIT_GITHUB_URL]",
      linkedin: "[EDIT_LINKEDIN_URL]",
    },
  },
  brandStatement:
    "Building high-scale backend systems and AI-native analytics products.",
  brandSubline:
    "Currently shaping DA Copilot — a schema-aware analytics workspace that turns natural language into safe, validated SQL.",
  ctas: {
    primary: { label: "View Work", href: "#projects" },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
  navItems: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
