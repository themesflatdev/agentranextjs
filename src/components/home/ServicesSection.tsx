import Image from "next/image";

interface ServiceItem {
  icon: string;
  name: string;
  desc: string;
}

const SERVICES_COLUMN_1: ServiceItem[] = [
  {
    icon: "icon-ai-chatbot",
    name: "AI Chatbot Development",
    desc: "Intelligent chatbots that provide instant human-like responses to customer.",
  },
  {
    icon: "icon-natural-language",
    name: "Natural Language Processing (NLP)",
    desc: "Enable systems to understand and respond to human language.",
  },
  {
    icon: "icon-computer-vision",
    name: "Computer Vision Solutions",
    desc: "Build AI systems that can analyze and interpret visual data.",
  },
];

const SERVICES_COLUMN_2: ServiceItem[] = [
  {
    icon: "icon-machine-learning",
    name: "Machine Learning Solutions",
    desc: "Create custom models to analyze data and predict outcomes.",
  },
  {
    icon: "icon-voice-assistant",
    name: "Voice Assistant Integration",
    desc: "Build voice-enabled apps and smart assistant features.",
  },
  {
    icon: "icon-ai-powered",
    name: "AI-Powered Marketing",
    desc: "Streamline an optimize your marketing efforts using intelligent AI systems",
  },
];

function ServicesColumn({ items }: { items: ServiceItem[] }) {
  return (
    <div className="list-services-item d-flex flex-column g-30">
      {items.map((item) => (
        <div className="box-services-icon" key={item.icon}>
          <div className="top-box">
            <div className="icon">
              <i className={item.icon}></i>
            </div>
            <a href="#" className="name-box h3 fw-6">
              {item.name}
            </a>
          </div>
          <p className="desc ff-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

interface ServicesSectionProps {
  dark?: boolean;
}

export default function ServicesSection({ dark = false }: ServicesSectionProps) {
  return (
    <section
      className={`section-services h-1 section-line flat-spacing-1${
        dark ? " section-style-dark" : ""
      }`}
    >
      <div className="line-page line-1"></div>
      {dark ? (
        <div className="image-shape image-shape-top">
          <Image
            src="/assets/images/icon/shape-s-services-dark-h1.png"
            alt="Image"
            width={2580}
            height={600}
          />
        </div>
      ) : (
        <>
          <div className="image-shape shape-1">
            <Image
              src="/assets/images/icon/shape-s-services-1.png"
              alt="Image"
              width={738}
              height={966}
            />
          </div>

          <div className="image-shape shape-2">
            <Image
              src="/assets/images/icon/shape-s-services-2.png"
              alt="Image"
              width={1048}
              height={622}
            />
          </div>
        </>
      )}
      <div className="container">
        <div className="heading-section style-center style-white">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            AI-Power Services
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-7 title-animation">
            Intelligent Solutions for
            <br />
            Modern Business
          </p>
        </div>
      </div>
      <div className="container w-1302">
        <div className="section-services-inner">
          <div className="image-shape-middle image-shape">
            <Image
              src="/assets/images/icon/shape-s-services-middle.png"
              alt="Image"
              width={700}
              height={700}
            />
            <div className="logo-shape">
              <Image
                src="/assets/images/logo/logo-services.svg"
                alt="Image"
                width={151}
                height={160}
              />
            </div>
          </div>

          <ServicesColumn items={SERVICES_COLUMN_1} />
          <ServicesColumn items={SERVICES_COLUMN_2} />
        </div>
      </div>
    </section>
  );
}
