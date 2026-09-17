import type { FAQItem } from "@/components/common/FAQAccordion";

// faq.html's 2nd accordion block — same question wording as faqHome2/faqTeam
// (the template reuses this exact 5-question set across pages) but faq.md
// asks for its own file rather than importing one of those, so this is kept
// separate even though the content is identical.
const PLACEHOLDER_ANSWER =
  "AI can automate repetitive tasks, improve customer experiences, analyze business data, increase productivity, and help businesses.";

export const faqPage2: FAQItem[] = [
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
