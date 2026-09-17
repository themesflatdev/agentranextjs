import type { FAQItem } from "@/components/common/FAQAccordion";

// pricing.html repeats this exact (shorter) placeholder answer under all 5
// questions — confirmed directly against the source, it's NOT the same
// sentence as faqHome2's PLACEHOLDER_ANSWER (that one adds "make smarter
// decisions faster"), so this isn't reused from that file.
const PLACEHOLDER_ANSWER =
  "AI can automate repetitive tasks, improve customer experiences, analyze business data, increase productivity, and help businesses.";

export const faqPricing: FAQItem[] = [
  {
    question: "1. What is included in your pricing plans?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "2. Do you offer custom pricing?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "3. Are there any hidden charges?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "4. Can I upgrade my plan later?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "5. Do you offer monthly or yearly plans?",
    answer: PLACEHOLDER_ANSWER,
  },
];
