import headStrap from "./public/img/desktop-imgs/game-head-strap.webp";
import homepageCar from "./public/img/desktop-imgs/homepage-car.webp";
import homepagePC from "./public/img/desktop-imgs/homepage-PC.webp";
import razerEdge from "./public/img/desktop-imgs/razer-edge-hero.webp";
import razerGame1 from "./public/img/desktop-imgs/razer-blade-18-power-desktop.webp";
// import razerGame2 from "./public/img/desktop-imgs/desktop-grid-img.webp";
// import razerGame3 from "./public/img/desktop-imgs/desktop-pinkgrid-img.webp";
// import razerGame4 from "./public/img/desktop-imgs/razer-blade-15.webp";
// import razerGame5 from "./public/img/desktop-imgs/desktop-greengrid-img.webp";

export const data = {
  navlinks: [
    { title: "Store", href: "/store" },
    { title: "Console", href: "/" },
    { title: "Mobile", href: "/" },
    { title: "Lifestyle", href: "/" },
    { title: "Services", href: "/" },
    { title: "Community", href: "/" },
    { title: "Support", href: "/" },
  ],
  bigScreennavs: [
    { title: "Store", href: "/store" },
    { title: "PC", href: "/" },
    { title: "Console", href: "/" },
    { title: "Lifestyle", href: "/" },
    { title: "Services", href: "/" },
    { title: "Community", href: "/" },
    { title: "Support", href: "/" },
  ],
  footerLinks: [
    {
      header: "Shop",
      links: [
        "Razerrstones",
        "Store Locator",
        "Education",
        "Exclusive",
        "Newsletter",
        "Programmes",
        "Omo",
      ],
    },
    {
      header: "Explore",
      links: ["Technology", "Chrome", "Concepts", "Exports", "Collabs"],
    },
    {
      header: "Support",
      links: [
        "Get Help",
        "Registration & Warranty",
        "RazerStore Support",
        "RazerCare",
        "Manage Razer ID",
        "Support Videos",
        "Accessibility Statement",
      ],
    },
    {
      header: "Company",
      links: ["About Us", "Careers", "Press Room", "Ventures", "Contact Us"],
    },
  ],

  homepageData: [
    {
      name: "RAZER VR ACCESSORIES",
      details: "AUTHORIAZED FOR META QUEST 2",
      description:
        "RAZER ADJUSTABLE HEAD STRAP SYSTEM & FACIAL INTERFACE AUTHORIZED FOR META QUEST 2",
      moreDescrip: "",
      imgURL: `${headStrap.src}`,
      learnMore: "",
      buyNow: "",
      id: "1",
    },
    {
      name: "RAZER ENKI PRO AUTOMOBILE LAMBORGHINI EDITION",
      details: "AUTOMOBILE LAMBORGHINI EDITION",
      description: "FROGED IN THE ULTIMATE FAST LANE",
      moreDescrip: "",
      imgURL: `${homepageCar.src}`,
      learnMore: "",
      buyNow: "",
      id: "2",
    },
    {
      name: "NEW RAZER BLADE 18",
      details: "ULTIMATE DESTOP REPLACEMENT",
      description: "FROGED IN THE ULTIMATE FAST LANE",
      moreDescrip: "",
      imgURL: `${homepagePC.src}`,
      learnMore: "",
      buyNow: "",
      id: "3",
    },
  ],

  homepageDataII: [
    {
      name: "NEW RAZER BLADE 16",
      details: "BIGGER. BETTER. STILL THE BEST",
      moreDescrip: "",
      imgURL: `${razerEdge.src}`,
      learnMore: "",
      buyNow: "",
      id: "4",
    },
    {
      name: "NEW RAZER BLADE 16",
      details: "BIGGER. BETTER. STILL THE BEST",
      moreDescrip: "",
      imgURL: `${razerGame1.src}`,
      learnMore: "",
      buyNow: "",
      id: "4",
    },
  ],

  reUsedData: [],
};
