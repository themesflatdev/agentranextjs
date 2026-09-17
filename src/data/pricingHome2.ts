export interface PricingHome2Plan {
  icon: string;
  name: string;
  desc: string;
  monthlyPrice: string;
  yearlyPrice: string;
  /** The Basic plan is the highlighted "style-pro" card with the gradient
   *  CTA button; Growth/Enterprise share the plain "style-color-2" button. */
  featured?: boolean;
  features: string[];
}

export const pricingHome2Plans: PricingHome2Plan[] = [
  {
    icon: "icon-union-1",
    name: "Basic Plan",
    desc: "Perfect for startups and small businesses looking to begin.",
    monthlyPrice: "$18",
    yearlyPrice: "$59",
    featured: true,
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
    yearlyPrice: "$299",
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
