export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover & Strategy",
    description:
      "We understand your business goals, analyze requirements, and define a clear AI strategy tailored to your needs.",
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "We transform ideas into intelligent, user-focused solutions by combining creative UX/UI design with advanced AI technologies.",
  },
  {
    number: "03",
    title: "Deploy & Optimize",
    description:
      "We launch solution, monitor performance, an continuously improve it for better results scalability.",
  },
];
