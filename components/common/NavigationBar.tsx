import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/GPS_LOGO.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="m-auto mb-5 px-3 rounded-b-xl ">
        <div className="flex items-center justify-between">
          <div>
            <Image src={Logo} alt="GPS Security Logo" className="md:w-[10vw] w-[15vw] lg:w-[8vw]" />
          </div> 

          <ul className="w-3/5 my-2 hidden md:flex text-lg lg:text-xl justify-evenly gap-2 font-bold">
            <li className=" py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={'/'}>Home</Link>
            </li>
             <li  className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={'About'}>About Us</Link>
            </li>

             <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={'Services'} >Solutions</Link>
            </li>

             <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={'Career'}>Join Us</Link>
            </li>

             <li className="py-2 px-1 border rounded-xl bg-sec text-white hover:bg-red-200 hover:text-black transition-all duration-400 cursor-pointer">
              <Link href={'Contact'}>Contact Us</Link>
            </li>
          </ul>

          {/**hamburger Button (visible on mobile only) */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/*Mobile Menu (shows when isOpen = true*/}
          {isOpen && (
            <ul className="flex flex-col gap-4 mt-4 text-lg font-inter font-semibold">
              <li className="hover:text-sec transition-all duration-200">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-sec transition-all duration-200">
                <Link href={"About"} onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li className="hover:text-sec transition-all duration-200">
                <Link href={"Services"} onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li className="hover:text-sec transition-all duration-200">
                <Link href={"Contact"} onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
