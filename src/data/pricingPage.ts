export interface PricingCardPlan {
  name: string;
  tagline: string;
  monthlyPrice: string;
  yearlyPrice: string;
  ctaHref: string;
  /** The middle "Standard Plan" card is the highlighted "style-pro" one. */
  featured?: boolean;
  /** Extra class on the CTA button — NOT tied to `featured`: the source
   *  gives each of the 3 cards its own button variant (white-2 / plain /
   *  color-2 left to right), confirmed directly against pricing.html. */
  ctaClassName?: string;
  features: string[];
}

// pricing.html's first pricing section (card grid, "style-bg-1"). The
// source names its 1st/3rd card "Basic Plan" and only the 2nd (featured)
// "Standard Plan" — verified directly against pricing.html, not the same
// "all 3 say Basic Plan" claim as the task doc, which didn't match the file.
export const pricingCardPlans: PricingCardPlan[] = [
  {
    name: "Basic Plan",
    tagline: "Getting started with",
    monthlyPrice: "$0",
    yearlyPrice: "$29",
    ctaHref: "/pricing",
    ctaClassName: "style-color-white-2",
    features: [
      "Basic AI integration",
      "Chatbot setup",
      "Limited customization",
      "Email support",
      "AI-powered automation",
    ],
  },
  {
    name: "Standard Plan",
    tagline: "Getting started with",
    monthlyPrice: "$19",
    yearlyPrice: "$199",
    ctaHref: "/pricing",
    featured: true,
    features: [
      "Advanced AI solutions",
      "Custom features & integrations",
      "AI-powered automation",
      "Fully customized AI systems",
      "24/7 premium support",
    ],
  },
  {
    name: "Basic Plan",
    tagline: "Getting started with",
    monthlyPrice: "$99",
    yearlyPrice: "$599",
    ctaHref: "/pricing",
    ctaClassName: "style-color-2",
    features: [
      "Basic AI integration",
      "Chatbot setup",
      "Limited customization",
      "Email support",
      "AI-powered automation",
    ],
  },
];

export interface PricingListPlan {
  icon: string;
  name: string;
  desc: string;
  monthlyPrice: string;
  yearlyPrice: string;
  /** The Growth plan is the highlighted "style-pro" card with the
   *  img-shape-pricing-item-pro.png background + gradient CTA button. */
  featured?: boolean;
  features: string[];
}

// pricing.html's second pricing section (stacked list, "style-2"). Named/
// typed correctly here (unlike pricingCardPlans above) — no content bug in
// the source for this section.
export const pricingListPlans: PricingListPlan[] = [
  {
    icon: "icon-union-1",
    name: "Basic Plan",
    desc: "Perfect for startups and small businesses looking to begin.",
    monthlyPrice: "$18",
    yearlyPrice: "$29",
    features: [
      "Basic AI integration",
      "Chatbot setup",
      "Limited customization",
      "Email support",
      "AI-powered automation",
    ],
  },
  {
    icon: "icon-union-2",
    name: "Growth Plan",
    desc: "Perfect for startups and small businesses looking to begin.",
    monthlyPrice: "$49",
    yearlyPrice: "$199",
    featured: true,
    features: [
      "Advanced AI Development",
      "Custom Web & Mobile Design",
      "AI Workflow Automation",
      "Predictive Analytics Integration",
      "API & Cloud Integration",
    ],
  },
  {
    icon: "icon-union-3",
    name: "Enterprise Plan",
    desc: "Perfect for startups and small businesses looking to begin.",
    monthlyPrice: "$98",
    yearlyPrice: "$599",
    features: [
      "Custom AI SaaS Development",
      "Machine Learning Integration",
      "Intelligent Process Automation",
      "Data Analytics & Reporting",
      "AI-Powered Business Automation",
    ],
  },
];
