export interface ClientLogo {
  name: string;
  mainSrc: string;
  hoverSrc: string;
  /** "-hover-2" suffixed asset — the /about page's client marquee
   *  (style-hover-2) swaps to this set instead of `hoverSrc`. */
  hoverSrc2: string;
  width: number;
  height: number;
}

export const clients: ClientLogo[] = [
  {
    name: "Softbar",
    mainSrc: "/assets/images/icon/softbar.svg",
    hoverSrc: "/assets/images/icon/softbar-hover.svg",
    hoverSrc2: "/assets/images/icon/softbar-hover-2.svg",
    width: 86,
    height: 24,
  },
  {
    name: "Hexdata",
    mainSrc: "/assets/images/icon/hexdata.svg",
    hoverSrc: "/assets/images/icon/hexdata-hover.svg",
    hoverSrc2: "/assets/images/icon/hexdata-hover-2.svg",
    width: 79,
    height: 24,
  },
  {
    name: "CloudApp",
    mainSrc: "/assets/images/icon/cloudApp.svg",
    hoverSrc: "/assets/images/icon/cloudApp-hover.svg",
    hoverSrc2: "/assets/images/icon/cloudApp-hover-2.svg",
    width: 112,
    height: 24,
  },
  {
    name: "Averros",
    mainSrc: "/assets/images/icon/averros.svg",
    hoverSrc: "/assets/images/icon/averros-hover.svg",
    hoverSrc2: "/assets/images/icon/averros-hover-2.svg",
    width: 97,
    height: 24,
  },
  {
    name: "Gevad",
    mainSrc: "/assets/images/icon/gevad.svg",
    hoverSrc: "/assets/images/icon/gevad-hover.svg",
    hoverSrc2: "/assets/images/icon/gevad-hover-2.svg",
    width: 93,
    height: 24,
  },
  {
    name: "Wixlet",
    mainSrc: "/assets/images/icon/wixlet.svg",
    hoverSrc: "/assets/images/icon/wixlet-hover.svg",
    hoverSrc2: "/assets/images/icon/wixlet-hover-2.svg",
    width: 108,
    height: 24,
  },
];
