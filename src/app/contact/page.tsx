import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ContactInfo from "@/components/contact/ContactInfo";
import ConsultingForm from "@/components/common/ConsultingForm";
import Marquee from "@/components/layout/Marquee";

export default function ContactPage() {
  return (
    <>
      <PageTitleBanner title="Contact Us" breadcrumbLabel="Contact Us" bgImage="/assets/images/page-title/page-title.jpg" />
      <div className="main-content">
        <section className="section-contact h-1 p-contact flat-spacing-1">
          <div className="container">
            <div className="row rg-60">
              <div className="col-lg-6">
                <ContactInfo />
              </div>
              <div className="col-lg-6">
                <ConsultingForm />
              </div>
            </div>
          </div>
        </section>

        <section className="section-marquee p-contact flat-spacing-9">
          <div className="container">
            <Marquee bordered dotted variant="style-color-title" />
          </div>
        </section>

        <section className="section-map flat-spacing-6">
          <div className="container">
            <div className="wg-map">
              <iframe
                src="https://maps.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
