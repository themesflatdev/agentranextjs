import { Fragment } from "react";
import Image from "next/image";

interface DownloadWidgetProps {
  titleLines: string[];
  /** blog-standard.html's sidebar widget has no "border-radius-30" on the
   *  button; service-details.html's does — confirmed by diffing both
   *  sources directly. */
  borderRadius?: boolean;
}

// Shared by BlogSidebar (blog-standard.md) and ServiceDetailSidebar
// (service-detail.md) — identical markup (image-bg + content-wg + Download
// button) in both sources, only the title lines and button radius differ.
export default function DownloadWidget({ titleLines, borderRadius = false }: DownloadWidgetProps) {
  return (
    <div className="wg-download">
      <div className="image-bg">
        <Image
          src="/assets/images/blog/bg-wg-download.jpg"
          alt=""
          fill
          sizes="(min-width: 1200px) 410px, 100vw"
        />
      </div>

      <div className="content-wg">
        <p className="title">
          {titleLines.map((line, index) => (
            <Fragment key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
        <p className="text-wg">
          Download our comprehensive services brochure to explore our innovative
        </p>

        <a href="#" className={`tf-btn style-big${borderRadius ? " border-radius-30" : ""}`}>
          <span className="text-btn">Download</span>
          <span className="icon-btn">
            <i className="icon-chevron-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
