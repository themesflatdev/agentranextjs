import type { FAQItem } from "@/components/common/FAQAccordion";

// service-details.html repeats this exact answer under all 5 questions —
// confirmed directly against the source, same demo-content pattern as
// faqHome2/faqPricing (each page has its own distinct placeholder sentence).
const PLACEHOLDER_ANSWER =
  "AI helps automate repetitive tasks, improve decision-making, enhance customer experience, and increase overall business efficiency and productivity.";

export const faqServiceDetails: FAQItem[] = [
  {
    question: "1. What services do you offer?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "2. How can AI help my business?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "3. Do you offer custom solutions?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "4. How long does a project take?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "5. Can you support ongoing maintenance?",
    answer: PLACEHOLDER_ANSWER,
  },
];
