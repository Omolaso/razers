import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import razerLogo from "../../public/img/desktop-imgs/razer-logo.webp.svg";
import Sidebar from "./Sidebar";
import { data } from "../../alldata";

const Navlinks = () => {
  const { bigScreennavs } = data;
  return (
    <>
      <nav className="sticky min-h-[10vh] top-0 left-0 w-full p-4 hidden md:flex flex-row items-center justify-center bg-black shadow-[0px_2px_0px_0px] shadow-green">
        <ul className="flex flex-row items-center justify-between w-full md:max-w-[1000px] lg:max-w-[1100px] text-grey font-normal text-base">
          <li>
            <Link href="/">
              <Image
                priority
                src={razerLogo}
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
          {bigScreennavs.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} className="hover:text-white duration-300">
                {title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              className="hover:text-white duration-300 text-[22px]"
            >
              <AiOutlineSearch />
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

      <section className="md:hidden block sticky top-0 w-full">
        <Sidebar razerLogo={razerLogo} />
      </section>
    </>
  );
};

export default Navlinks;
