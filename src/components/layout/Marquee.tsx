const MARQUEE_TEXTS = [
  "AI - Power Agency",
  "Data - driven Insights",
  "Ai - startup solutions",
];

interface MarqueeProps {
  /** "style-2" adds the gradient-text hover style used by the home page's
   *  standalone marquee section; "style-color-title" is the ai-startup
   *  page's plain (non-hover-gradient) title-colored text, used on its
   *  Services/Projects divider strip; the footer's marquee stays plain. */
  variant?: "default" | "style-2" | "style-color-title";
  /** Wraps the strip in the bordered `.style-border` padding used by every
   *  standalone marquee section (as opposed to the footer's plain marquee). */
  bordered?: boolean;
  /** Adds `.section-dot` + the 4 corner `.dot` spans on top of `bordered` —
   *  the home page's marquee section has these; ai-startup's Services/
   *  Projects divider strip is bordered but has no dots, so this is a
   *  separate flag rather than baked into `bordered`. */
  dotted?: boolean;
  /** Extra class appended to the wrapper — e.g. the Contact CTA section
   *  adds "style-bg-blur" on top of the bordered variant, and ai-startup's
   *  divider strip adds "style-border-bottom". */
  className?: string;
  /** index-dark.html's marquee strips add "style-border-2" (a darker border
   *  color, see _section.scss) and "dot-gradient" on each corner dot when
   *  `dotted` — confirmed by diffing index.html vs index-dark.html directly. */
  dark?: boolean;
  /** Whether the corner dots (when `dotted`) get the "dot-gradient" modifier.
   *  Defaults to `dark` (index-dark's marquee sections use gradient dots).
   *  ai-startup-dark's divider strip is the one exception: it's `dark` but
   *  its dots stay plain (its wrapper carries "dot-white" instead) — set
   *  this to `false` there. */
  gradientDots?: boolean;
}

// infinityslide.js (jQuery plugin) drove this track in the original template;
// replaced with a plain CSS animation (see .infiniteSlide-wrapper in
// _widget.scss) so no JS runtime is needed. The slide set is rendered twice
// so the CSS loop (translateX(-50%)) always lands on an identical frame.
export default function Marquee({
  variant = "default",
  bordered = false,
  dotted = false,
  className = "",
  dark = false,
  gradientDots = dark,
}: MarqueeProps) {
  const slides = [...MARQUEE_TEXTS, ...MARQUEE_TEXTS];
  const dotClassName = `dot${gradientDots ? " dot-gradient" : ""}`;

  return (
    <div
      className={`infiniteSlide-app${bordered ? " style-border" : ""}${
        dark && bordered ? " style-border-2" : ""
      }${dotted ? " section-dot" : ""}${className ? ` ${className}` : ""}`}
    >
      {dotted && (
        <>
          <span className={`${dotClassName} dot-1`}></span>
          <span className={`${dotClassName} dot-2`}></span>
          <span className={`${dotClassName} dot-3`}></span>
          <span className={`${dotClassName} dot-4`}></span>
        </>
      )}
      <div
        className="infiniteSlide infiniteSlide-wrapper tf-marquee"
        data-clone="3"
      >
        {slides.map((text, index) => (
          <div className="infiniteSlide-slide" key={index}>
            <div className="marquee-item">
              <div
                className={`marque-text-item${
                  variant !== "default" ? ` ${variant}` : ""
                }`}
              >
                <i className="icon-sparkle"></i>
                <span className="h1 fw-7 letter-space--5 lh-72">{text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
