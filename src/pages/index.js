import HeadComp from "@/components/HeadComp";

import razerLogo from "../../public/img/desktop-imgs/razer-logo.webp.svg";

import LandingPage from "@/components/LandingPage";

export default function Home() {
  const pageTitle = "Razers | Games and More";

  return (
    <>
      <HeadComp title={pageTitle} logo={razerLogo} />
      <LandingPage />
    </>
  );
}
