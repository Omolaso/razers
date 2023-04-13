import HeadComp from "@/components/HeadComp";

import Footer from "@/components/Footer";
import razerLogo from "../../public/img/desktop-imgs/razer-logo.webp.svg";
import Navlinks from "@/components/Navlinks";

export default function Home() {
  const pageTitle = "Razers | Games and More";

  return (
    <>
      <HeadComp title={pageTitle} logo={razerLogo} />
      <Navlinks />
      <section className="bg-black min-h-screen"></section>
      <Footer />
    </>
  );
}
