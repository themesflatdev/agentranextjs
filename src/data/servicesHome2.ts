export interface ServiceHome2Item {
  icon: string;
  number: string;
  name: string;
  slug: string;
  /** Short label used by service-details.html's sidebar category list —
   *  the full `name` wraps to 2 lines there, the source uses these shorter
   *  versions instead (confirmed by diffing service-details.html). */
  sidebarLabel: string;
  desc: string;
  features: [string, string];
}

// Numbered 01-06 in display order — the original ai-startup.html markup
// actually repeats "01" on the SVG gradient number for items 5 and 6 (a
// copy-paste bug in the source), but the badge is meant to show the item's
// sequence, so this keeps it sequential instead of reproducing that bug.
export const servicesHome2: ServiceHome2Item[] = [
  {
    icon: "icon-intelligent",
    number: "01",
    name: "Intelligent Process Automation",
    slug: "intelligent-process-automation",
    sidebarLabel: "Intelligent Automation",
    desc: "Intelligent Process Automation (IPA) is an advanced approach",
    features: ["Task Management", "Real-Time Data"],
  },
  {
    icon: "icon-ai-saas",
    number: "02",
    name: "AI SaaS Platform Development",
    slug: "ai-saas-platform-development",
    sidebarLabel: "AI SaaS Development",
    desc: "AI SaaS Platform Development focuses on creating scalable.",
    features: ["User Authentication", "Machine Learning"],
  },
  {
    icon: "icon-seamless",
    number: "03",
    name: "Seamless System Integration",
    slug: "seamless-system-integration",
    sidebarLabel: "Seamless Integration",
    desc: "Seamless System Integration connects multiple platforms.",
    features: ["Task Management", "Real-Time Data"],
  },
  {
    icon: "icon-machine",
    number: "04",
    name: "Machine Learning Capabilities",
    slug: "machine-learning-capabilities",
    sidebarLabel: "Machine Learning",
    desc: "Machine Learning Capabilities enable systems to learn.",
    features: ["Task Management", "Real-Time Data"],
  },
  {
    icon: "icon-advanced",
    number: "05",
    name: "Advanced Analytics and Reporting",
    slug: "advanced-analytics-and-reporting",
    sidebarLabel: "Advanced Analytics",
    desc: "Advanced Analytics Reporting provide businesses.",
    features: ["Task Management", "Real-Time Data"],
  },
  {
    icon: "icon-cloud-based",
    number: "06",
    name: "Cloud-Based Process Management",
    slug: "cloud-based-process-management",
    sidebarLabel: "Cloud-Based Process",
    desc: "Cloud-Based work operations and data securely cloud.",
    features: ["Task Management", "Real-Time Data"],
  },
];
