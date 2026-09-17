import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

interface PageTitleBannerMeta {
  category: string;
  author: string;
  date: string;
}

interface PageTitleBannerProps {
  title: string;
  breadcrumbLabel: string;
  bgImage: string;
  meta?: PageTitleBannerMeta;
  align?: "left" | "center";
}

// The original HTML hand-breaks the centered/details title into two lines
// with a literal <br/> (hidden again on small screens via _section.scss),
// picked at whatever word split reads best for that specific title. Titles
// coming through here don't carry an authored break point of their own, so
// respect one if the data already embeds "\n" (the one hand-authored title
// does), otherwise fall back to splitting at the midpoint by word count so
// every centered title gets the same two-line treatment.
function splitTitleIntoLines(title: string): string[] {
  if (title.includes("\n")) return title.split("\n");

  const words = title.split(" ");
  if (words.length < 2) return [title];

  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
}

export default function PageTitleBanner({
  title,
  breadcrumbLabel,
  bgImage,
  meta,
  align = "left",
}: PageTitleBannerProps) {
  const isCentered = align === "center";

  const breadcrumb = (
    <div className="breadkcum">
      <Link href="/" className="text-title-1 fw-6">
        Home
      </Link>
      <span className="text-title-1 fw-6">/</span>
      <span className="text-title-1 fw-6 text-in-page">{breadcrumbLabel}</span>
    </div>
  );

  return (
    <section className={`page-title${isCentered ? " page-title-details" : ""}`}>
      <div className="image-bg">
        <Image src={bgImage} alt="" fill sizes="100vw" />
      </div>
      <div className="container">
        <div className="page-title-content">
          {isCentered ? (
            <>
              {breadcrumb}
              <h2 className="title-page title">
                {splitTitleIntoLines(title).map((line, index, lines) => (
                  <Fragment key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </Fragment>
                ))}
              </h2>
              {meta && (
                <div className="meta-post justify-content-center">
                  <a href="#" className="meta-item ff-2 item-color-white">
                    {meta.category}
                  </a>
                  <a href="#" className="meta-item ff-2 item-color-white">
                    By {meta.author}
                  </a>
                  <a href="#" className="meta-item ff-2 item-color-white">
                    {meta.date}
                  </a>
                </div>
              )}
            </>
          ) : (
            <>
              <p className="title-page">{title}</p>
              {breadcrumb}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
