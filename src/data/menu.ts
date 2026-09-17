export interface MenuChildItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuChildItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "#",
    children: [
      { label: "Ai Agency", href: "/" },
      { label: "Ai Startup", href: "/ai-startup" },
      { label: "Ai Agency Dark", href: "/index-dark" },
      { label: "Ai Startup Dark", href: "/ai-startup-dark" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog Standard", href: "/blog-standard" },
      {
        label: "Blog Details",
        href: "/blog-details/the-role-of-machine-learning-in-business-growth",
      },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Service", href: "/service" },
      {
        label: "Service Details",
        href: "/service-details/intelligent-process-automation",
      },
      { label: "Team", href: "/team" },
      { label: "FAQ", href: "/faq" },
      { label: "Project 1", href: "/project-1" },
      { label: "Project 2", href: "/project-2" },
      {
        label: "Project Details",
        href: "/project-details/ai-content-generator-platform",
      },
      { label: "404", href: "/404" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** An item (or one of its children) is active when its href matches the current pathname. */
export function isMenuItemActive(item: MenuItem, pathname: string): boolean {
  if (item.children) {
    return item.children.some((child) => child.href === pathname);
  }
  return item.href === pathname;
}
