import Image from "next/image";
import { clients } from "@/data/clients";

// Same infinite-scroll CSS mechanism as layout/Marquee.tsx (the slide set is
// rendered twice so the `translateX(-50%)` keyframe loops on an identical
// frame — see _widget.scss's `.infiniteSlide-wrapper`). Not extracted into a
// shared hook: the whole mechanism is a CSS animation with no JS state or
// effect to hoist, so a "hook" would just be an empty wrapper around a class
// name. What actually differs between this and the text marquee (Footer/
// ContactCTASection/the Services divider strip) is the slide content itself
// (logo images with a CSS :hover swap vs. gradient text), so duplicating
// this small wrapper markup here is simpler than forcing a shared abstraction
// over two unrelated content shapes.
interface ClientLogosMarqueeProps {
  dark?: boolean;
  /** Which hover-swap asset set `.img-hover` uses, and whether the
   *  "style-hover-2" modifier is added to `.brand-item` — "1" (default) is
   *  ai-startup's "-hover.svg" set, "2" is /about's "-hover-2.svg" set
   *  (confirmed by diffing ai-startup.html vs about.html directly). */
  hoverVariant?: "1" | "2";
}

export default function ClientLogosMarquee({
  dark = false,
  hoverVariant = "1",
}: ClientLogosMarqueeProps) {
  const slides = [...clients, ...clients];

  return (
    <section className={`section-clients h-2 ${dark ? "flat-spacing-6" : "flat-spacing-1"}`}>
      <div className="container">
        <div className="section-clients-inner">
          <p className="text h4 fw-6 text-center mb-50 title-animation">AI-Powered Solutions for Fast-Growing Startups and Global Brands Smart Technology Solutions for High-Performing Product Teams</p>

          <div className="infiniteSlide-app brand-marque">
            <div
              className="infiniteSlide infiniteSlide-wrapper tf-marquee"
              data-clone="3"
            >
              {slides.map((client, index) => (
                <div className="infiniteSlide-slide" key={`${client.name}-${index}`}>
                  <a
                    href="#"
                    className={`brand-item${dark ? " style-dark" : ""}${
                      hoverVariant === "2" ? " style-hover-2" : ""
                    }`}
                  >
                    <Image
                      src={dark ? client.hoverSrc : client.mainSrc}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="img-main"
                    />
                    <Image
                      src={hoverVariant === "2" ? client.hoverSrc2 : client.hoverSrc}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="img-hover"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
