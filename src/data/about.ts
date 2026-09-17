export interface MissionCard {
  title: string;
  desc: string;
}

export const missionCards: MissionCard[] = [
  {
    title: "Our Mission",
    desc: "We are dedicated to transforming innovative ideas scalable digital products by combining advanced",
  },
  {
    title: "Our Vision",
    desc: "Our vision is to become a leading AI startup agency that shapes the future of digital innovation.",
  },
];

export interface WhyBoxIcon {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  name: string;
  desc: string;
}

export const whyBoxIcons: WhyBoxIcon[] = [
  {
    icon: "/assets/images/icon/icon-ai-driven.svg",
    iconWidth: 40,
    iconHeight: 40,
    name: "AI-Driven Innovation",
    desc: "We build smart, future-ready solutions powered by advanced artificial intelligence.",
  },
  {
    icon: "/assets/images/icon/icon-custom-ai.svg",
    iconWidth: 38,
    iconHeight: 40,
    name: "Custom AI Solutions",
    desc: "Every project is tailored to your unique business goals industry needs fast growing.",
  },
];
