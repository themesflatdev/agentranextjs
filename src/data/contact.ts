export const contactHeading = {
  subTitle: "Contact Us",
  titleLines: ["We're committed", "to helping you with", "every step of your", "journey."],
  description:
    "We're here to help you take your business to the next level with smart, reliable IT solutions whether have questions",
};

export interface ContactItemLink {
  href: string;
  /** Rendered with a <br/> between entries — Location is one <a> spanning
   *  2 lines, Get In Touch is 2 separate single-line <a>s (mailto/tel), so
   *  this models both without forcing a shape neither one actually has. */
  lines: string[];
}

export interface ContactItem {
  icon: string;
  title: string;
  links: ContactItemLink[];
}

export const contactItems: ContactItem[] = [
  {
    icon: "icon-map-pin",
    title: "Location",
    links: [{ href: "#", lines: ["123 Maple Street, Los Angeles,", "CA 90001, USA"] }],
  },
  {
    icon: "icon-phone-outgoing",
    title: "Get In Touch",
    links: [
      { href: "mailto:supportagentra@gmail.com", lines: ["supportagentra@gmail.com"] },
      { href: "tel:+13055550198", lines: ["+1 (305) 555-0198"] },
    ],
  },
];
