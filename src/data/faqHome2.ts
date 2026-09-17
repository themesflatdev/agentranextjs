import type { FAQItem } from "@/components/common/FAQAccordion";

// Shared placeholder answer text — the source template repeats this exact
// paragraph under all 5 questions verbatim (not a conversion mistake).
const PLACEHOLDER_ANSWER =
  "AI can automate repetitive tasks, improve customer experiences, analyze business data, increase productivity, and help businesses make smarter decisions faster.";

export const faqHome2: FAQItem[] = [
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
