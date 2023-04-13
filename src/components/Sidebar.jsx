import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClear } from "react-icons/md";
import { data } from "../../alldata";

const Sidebar = ({ razerLogo }) => {
  const [modal, setModal] = useState(false);
  const { navlinks } = data;

  function removeModal() {
    return setModal(false);
  }

  useEffect(() => {
    (modal && window.addEventListener("scroll", removeModal)) ||
      window.addEventListener("resize", removeModal);

    return () => {
      window.removeEventListener("scroll", removeModal);
      window.removeEventListener("resize", removeModal);
    };
  }, [modal]);

  return (
    <main className="relative">
      <nav className="sticky min-h-[10vh] top-0 w-full p-4 flex-row items-center justify-center bg-black shadow-[0px_2px_0px_0px] shadow-green text-white">
        <ul className="flex flex-row items-center justify-between text-grey font-normal text-base">
          <li>
            <button
              type="button"
              onClick={() => setModal(true)}
              className="hover:text-white duration-300 text-[22px]"
            >
              <GiHamburgerMenu />
            </button>
          </li>
          <li>
            <Link href="/">
              <Image
                priority
                src={razerLogo}
                alt="logo"
                width={35}
                height={35}
              />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-white duration-300 text-[22px] relative"
            >
              <span className="absolute text-[16px] w-[20px] h-[20px] bg-green rounded-full flex items-center justify-center text-white right-[-8px] top-[-10px]">
                0
              </span>
              <AiOutlineShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>

      <section
        className={
          modal
            ? "flex flex-col gap-16 bg-black fixed left-0 duration-700 p-4 ease-in-out top-0 w-full max-w-[90vw] min-h-[100vh]"
            : "flex flex-col gap-16 bg-black fixed left-[-100%] duration-700 p-4 ease-in-out top-0 w-full max-w-[90vw] min-h-[100vh]"
        }
      >
        <ul className="flex flex-col w-full min-h-[15vh] justify-between">
          <li>
            <button
              type="button"
              onClick={() => setModal(false)}
              className="text-3xl text-grey hover:text-white ease-in-out duration-300"
            >
              <MdOutlineClear />
            </button>
          </li>
          <li>
            <input
              type="text"
              placeholder="search razer.com"
              className="min-h-[35px] bg-grey placeholder:text-black text-base font-normal px-3 w-full rounded-md focus:shadow-[0px_0px_0px_2px] focus:shadow-searchInput duration-300 ease-in-out"
            />
          </li>
        </ul>

        <ul className="flex flex-col w-full justify-between min-h-[60vh]">
          {navlinks.map((navlink) => (
            <li
              key={navlink.title}
              className="min-h-[40px] flex items-center justify-center w-full text-lg font-normal text-grey hover:text-white border-b-2 border-grey"
            >
              <Link
                onClick={() => setModal(false)}
                href={navlink.href}
                className="w-full h-full"
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
