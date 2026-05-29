export const siteConfig = {
  name: "Sahil Saxena",
  firstName: "Sahil",
  lastName: "Saxena",
  role: "Backend Engineer",
  discipline: "Backend & Cloud-Native Systems",
  location: "Faridabad, India",
  status: {
    label: "Open to backend & cloud roles",
    available: true,
  },
  contact: {
    email: "sahil.saxena.29634@gmail.com",
    phone: "+91 8130508320",
    links: {
      github: "https://github.com/sahilsaxena632",
      linkedin: "https://www.linkedin.com/in/sahil-saxena-a43269151/",
    },
  },
  brandStatement:
    "I build backend systems that stay fast and reliable under real load.",
  brandSubline:
    "Backend engineer with 3+ years building high-throughput APIs, queue-driven workflows, and cloud-native services on Node.js, Python, and AWS — handling 100K+ daily transactions and 1M+ concurrent requests. Looking for backend and platform roles where scale and reliability matter.",
  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
  navItems: [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
