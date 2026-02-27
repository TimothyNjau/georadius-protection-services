import Image from "next/image";
import LOGO from "@/public/assets/images/GPS_LOGO.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:justify-around py-4 sm:py-6 px-3 sm:px-6">
          <div className="">
            <Image
              src={LOGO}
              alt="GPS Security logo"
              width={150}
              className="w-32 sm:w-40 md:w-48 lg:w-56"
            />
          </div>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h1 className="text-base sm:text-lg lg:text-xl font-bold cursor-default">
              GPS Secuirty HQ
            </h1>
            <h2 className="text-sm sm:text-base cursor-default">
              Ruiru Town, Rowini Hse, 1st Floor, G14
            </h2>
            <h2 className="text-sm sm:text-base cursor-default">
              Tel : 0725 572 720
            </h2>
            <h2 className="text-sm sm:text-base cursor-default">
              Email : georadiussecurity@gmail.com
            </h2>
          </div>
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h1 className="text-base sm:text-lg lg:text-xl font-bold cursor-default">
              QuickLinks
            </h1>
            <Link
              href={"About"}
              className="text-sm sm:text-base hover:text-sec duration-200 transition-colors"
            >
              Who we are
            </Link>
            <Link
              href={"Services"}
              className="text-sm sm:text-base hover:text-sec duration-200 transition-colors"
            >
              Services
            </Link>
            <Link
              href={"Career"}
              className="text-sm sm:text-base hover:text-sec duration-200 transition-colors"
            >
              Career
            </Link>
            <Link
              href={"Media-Gallery"}
              className="text-sm sm:text-base hover:text-sec duration-200 transition-colors"
            >
              Media
            </Link>
          </div>
        </section>
        <section className="bg-black w-full py-2 sm:py-3">
          <div className="text-xs sm:text-sm text-white text-center">
            Copyright © 2026 GPS Security. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
