import type { FAQItem } from "@/components/common/FAQAccordion";

// faq.html's 1st accordion block, about Generative AI solutions specifically.
// Item 2's answer has a mid-sentence <br/> in the source markup that's purely
// a hand line-wrap in the editor (same visual paragraph either way, and no
// other converted FAQ block preserves this kind of break) — kept as plain
// continuous text like every other FAQ data file.
const PLACEHOLDER_ANSWER =
  "AI can automate repetitive tasks, improve customer experiences, analyze business data, increase productivity, and help businesses.";

export const faqPage1: FAQItem[] = [
  {
    question: "1. What are Generative AI solutions?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "2. How can Generative AI benefit my business?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "3. Can you build custom Generative AI tools?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "4. What industries can use Generative AI?",
    answer: PLACEHOLDER_ANSWER,
  },
  {
    question: "5. Do you integrate AI into existing systems?",
    answer: PLACEHOLDER_ANSWER,
  },
];
