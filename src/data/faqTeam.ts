import type { FAQItem } from "@/components/common/FAQAccordion";

// team.html reuses faqHome2's exact question wording but pairs it with
// faqPricing's shorter placeholder answer (no "make smarter decisions
// faster") — confirmed directly against the source, so this isn't a
// duplicate of either file.
const PLACEHOLDER_ANSWER =
  "AI can automate repetitive tasks, improve customer experiences, analyze business data, increase productivity, and help businesses.";

export const faqTeam: FAQItem[] = [
  {
    question: "1. What does your AI startup agency provide?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "2. How can AI help my business grow?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "3. Do you provide custom AI solutions?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "4. How long does an AI project take?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "5. Do you work with startups and enterprises?",
    answer: PLACEHOLDER_ANSWER,
  },
];
