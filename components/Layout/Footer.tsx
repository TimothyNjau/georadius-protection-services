import Image from "next/image";
import LOGO from "@/public/assets/images/GPS_LOGO.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex flex-col items-center gap-3 lg:flex-row lg:justify-around py-2 px-3">
          <div className="">
            <Image src={LOGO} alt="GPS Security logo" width={200} />
          </div>
          <div className="flex flex-col wrap justify-center">
            <h1 className="text lg:text-xl font-bold cursor-default">GPS Secuirty HQ</h1>
            <h2 className="cursor-default">Ruiru Town, Rowini Hse, 1st Floor, G14</h2>
            <h2 className="cursor-default">Tel : 0725 572 720</h2>
            <h2 className="cursor-default">Email : georadiussecurity@gmail.com</h2>
          </div>
          <div className="flex flex-col wrap justify-center">
            <h1 className="text-xl font-bold cursor-default">QuickLinks</h1>
            <Link href={"About"} className="hover:text-sec duration-200 transition-colors ">Who we are</Link>
            <Link href={"Services"} className="hover:text-sec duration-200 transition-colors ">Services</Link>
            <Link href={"Career"} className="hover:text-sec duration-200 transition-colors ">Career</Link>
            <Link href={"Media-Gallery"} className="hover:text-sec duration-200 transition-colors ">Media</Link>
          </div>
        </section>
        <section className="bg-black w-full py-3">
          <div className="text-sm text-white text-center">Copyright © 2026 GPS Security. All rights reserved.</div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
