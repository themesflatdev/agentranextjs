import type { Metadata } from "next";
import { Bai_Jamjuree, DM_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/icons/icomoon/style.css";
import "../styles/app.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import GoTopButton from "@/components/layout/GoTopButton";
import ScrollAnimations from "@/components/common/ScrollAnimations";
import BodyThemeClass from "@/components/common/BodyThemeClass";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
});

// Every page in agentrahtml shares this exact same <title>/description/author
// — a demo-template quirk (no per-page unique titles), confirmed by diffing
// several source pages directly — so this is set once here, not overridden
// per route.
export const metadata: Metadata = {
  title: "Agentra - Ai Agency Nextjs Template",
  description: "",
  authors: [{ name: "themesflat.com" }],
  icons: {
    icon: "/assets/images/favicon.svg",
    apple: "/assets/images/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} ${dmSans.variable}`}>
      <body>
        <BodyThemeClass />
        <Preloader />
        <Header />
        {children}
        <Footer />
        <GoTopButton />
        <ScrollAnimations />
      </body>
    </html>
  );
}
