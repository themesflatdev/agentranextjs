export interface FooterLinkItem {
  label: string;
  href: string;
}

export const footerMenuColumn: FooterLinkItem[] = [
  { label: "Company", href: "/about" },
  { label: "Portfolio", href: "/team" },
  { label: "Stack", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "/contact" },
];

// All 5 pointed at the same single "service-details.html" demo page in the
// source (these labels don't map 1:1 to servicesHome2's 6 real service
// names) — now that the route is slug-based, they all resolve to the same
// first slug rather than a dead "/service-details" link.
const DEFAULT_SERVICE_DETAILS_HREF = "/service-details/intelligent-process-automation";

export const footerServicesColumn: FooterLinkItem[] = [
  { label: "AI Chatbot", href: DEFAULT_SERVICE_DETAILS_HREF },
  { label: "Machine Learning", href: DEFAULT_SERVICE_DETAILS_HREF },
  { label: "Predictive Analytics", href: DEFAULT_SERVICE_DETAILS_HREF },
  { label: "Voice & Speech", href: DEFAULT_SERVICE_DETAILS_HREF },
  { label: "Natural Language", href: DEFAULT_SERVICE_DETAILS_HREF },
];
