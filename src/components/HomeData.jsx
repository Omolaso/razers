import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { data } from "../../alldata";

const HomeData = () => {
  const { homepageData } = data;

  return (
    <main className="min-h-screen flex flex-col w-full text-white">
      <section className="min-h-[8vh] flex items-center justify-center p-2 text-center bg-grey w-full">
        <h2 className="font-normal text-xs md:text-sm">
          All orders over US$79 will enjoy free standard shipping to the United
          States.
        </h2>
      </section>
      <section className="min-h-screen flex flex-col gap-4 bg-black w-full">
        {homepageData.map(
          ({ name, imgURL, id, details, learnMore, buyNow }) => (
            <div key={id} className="w-full">
              <div className="min-h-[20vh] lg:min-h-[25vh] flex flex-col p-4 items-center text-center justify-end gap-2 w-full">
                <h1 className="font-semibold text-3xl lg:text-5xl">{name}</h1>
                <p className="font-normal text-lg lg:text-2xl">{details}</p>
                <div className="flex flex-row items-center w-full justify-center gap-4 text-base md:text-lg">
                  <Link
                    href={learnMore}
                    className="flex flex-row items-center gap-1"
                  >
                    <span className="hover:underline">Learn More</span>
                    <span className="text-green hover:translate-x-1 duration-500">
                      <MdArrowForward />
                    </span>
                  </Link>
                  <Link
                    href={buyNow}
                    className="flex flex-row items-center gap-1"
                  >
                    <span className="hover:underline">Buy Now</span>
                    <span className="text-green hover:translate-x-1 duration-500">
                      <MdArrowForward />
                    </span>
                  </Link>
                </div>
              </div>
              <Link href={learnMore}>
                <Image
                  src={imgURL}
                  alt={name}
                  width={1500}
                  height={1500}
                  className="w-full aspect-[4/2]"
                />
              </Link>
            </div>
          )
        )}
      </section>
      <section className="min-h-screen bg-black w-full">HII</section>
    </main>
  );
};

export default HomeData;
