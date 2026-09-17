import Marquee from "@/components/layout/Marquee";

interface MarqueeSectionProps {
  dark?: boolean;
}

export default function MarqueeSection({ dark = false }: MarqueeSectionProps) {
  return (
    <section className="section-line section-marquee flat-spacing-1">
      <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>

      <div className="container">
        <Marquee bordered dotted variant="style-2" dark={dark} />
      </div>
    </section>
  );
}
