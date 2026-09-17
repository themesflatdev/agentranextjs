export interface HomePricingPlan {
  name: string;
  tagline: string;
  monthlyPrice: string;
  yearlyPrice: string;
  ctaHref: string;
  featured?: boolean;
  features: string[];
}

// Named distinctly from the future full /pricing page's data/pricing.ts —
// the home page only ever shows these 2 plans (Basic/Pro), while the full
// pricing page will likely have more, so they shouldn't share one file.
export const homePricingPlans: HomePricingPlan[] = [
  {
    name: "Basic Plan",
    tagline: "Getting started with",
    monthlyPrice: "$0",
    yearlyPrice: "$59",
    ctaHref: "/pricing",
    features: [
      "Basic AI integration",
      "Chatbot setup",
      "Limited customization",
      "Email support",
      "AI-powered automation",
    ],
  },
  {
    name: "Pro Plan",
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
];
