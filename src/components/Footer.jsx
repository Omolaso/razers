import { data } from "../../alldata";

const Footer = () => {
  const { footerLinks } = data;

  return (
    <footer className="bg-footerBg min-h-[50vh] flex items-center justify-center px-8 py-4 w-full">
      <main className="flex flex-col gap-8 w-full mt-[50px]">
        <section className="flex flex-col md:flex-row items-start gap-8 md:gap-0 justify-between w-full">
          <div className="flex flex-row items-start justify-between md:max-w-full max-w-[280px] w-full gap-4 flex-wrap flex-1">
            {footerLinks.map(({ header, links }) => (
              <div key={header} className="flex flex-col gap-4">
                <h1 className="text-white text-xl font-normal">{header}</h1>
                <ul className="flex flex-col gap-3 font-normal text-sm">
                  {links.map((item, index) => (
                    <li key={index} className="text-grey">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-green flex-[0.5] flex items-center md:self-auto self-center justify-center font-normal text-sm">
            <h1>FOR GAMERS. BY GAMERS.™</h1>
          </div>
        </section>

        <section className="min-h-[8vh] flex items-center justify-center flex-wrap font-normal text-[13px] border-footerBorder border-t w-full text-footerBorder py-3">
          <div className="flex flex-row flex-wrap items-center md:gap-0 gap-3 justify-center md:justify-between w-full md:text-left text-center">
            <p>Copyright © 2023 Razer Inc. All Rights Reserved.</p>
            <ul className="flex flex-row items-center justify-center gap-4">
              <li>Site Map</li>
              <li>Legal</li>
              <li>Private Policy</li>
              <li>Settings</li>
            </ul>
            <ul className="flex flex-row items-center justify-center gap-4">
              <li>USA</li>
              <li>Change Location</li>
            </ul>
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
