import Image from "next/image";
import Link from "next/link";
import PageTitleBanner from "@/components/sections/PageTitleBanner";

// Next.js renders this automatically for unmatched routes AND for any
// notFound() call from a dynamic route (service-details/[slug],
// project-details/[slug]) — no "/404" page.tsx needed. Root layout.tsx
// already wraps every page (including this one) with Header/Footer, so
// nothing extra is needed here for that.
export default function NotFound() {
  return (
    <>
      <PageTitleBanner title="404" breadcrumbLabel="404" bgImage="/assets/images/page-title/page-title.jpg" />
      <div className="main-content">
        <section className="section-404 flat-spacing-1">
          <div className="container">
            <div className="wg-404">
              <div className="image mb-50">
                <Image
                  src="/assets/images/widget/img-404.png"
                  alt="Image"
                  width={707}
                  height={550}
                />
              </div>
              <div className="wg-content text-center">
                <p className="h2 title fw-6 color-title mb-20">
                  Sorry, the page you&rsquo;re looking
                  <br />
                  for isn&rsquo;t here.
                </p>

                <p className="desc ff-2 color-paragraph mb-30">
                  Don&rsquo;t worry—use the navigation menu or return to the homepage to continue
                  <br />
                  exploring. We&rsquo;re here to help you get back on track quickly and easily.
                </p>

                <Link href="/" className="tf-btn style-big">
                  <span className="text-btn">Back to Home</span>
                  <span className="icon-btn">
                    <i className="icon-chevron-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
