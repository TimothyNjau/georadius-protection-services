import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/GPS_LOGO.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="m-auto mb-3 md:mb-5 px-3 md:px-6 rounded-b-xl">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={Logo}
              alt="GPS Security Logo"
              className="w-12 sm:w-16 md:w-20 lg:w-24"
            />
          </div>

          <ul className="hidden md:flex md:w-3/5 lg:w-2/3 my-2 text-base lg:text-lg xl:text-xl justify-evenly gap-2 font-bold">
            <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={"About"}>About Us</Link>
            </li>
            <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={"Services"}>Solutions</Link>
            </li>
            <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
              <Link href={"Career"}>Join Us</Link>
            </li>
            <li className="py-2 px-1 border rounded-xl bg-sec text-white hover:bg-red-200 hover:text-black transition-all duration-400 cursor-pointer text-sm lg:text-base">
              <Link href={"Contact"}>Contact Us</Link>
            </li>
          </ul>

          {/**hamburger Button (visible on mobile only) */}
          <button
            className="md:hidden text-2xl sm:text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/*Mobile Menu (shows when isOpen = true*/}
          {isOpen && (
            <ul className="absolute top-24 left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 md:hidden flex flex-col gap-3 text-base font-inter font-semibold z-50">
              <li className="hover:text-sec transition-all duration-200 py-2">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-sec transition-all duration-200 py-2">
                <Link href={"About"} onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className="hover:text-sec transition-all duration-200 py-2">
                <Link href={"Services"} onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li className="hover:text-sec transition-all duration-200 py-2">
                <Link href={"Career"} onClick={() => setIsOpen(false)}>
                  Join Us
                </Link>
              </li>
              <li className="transition-all duration-200 py-2 px-2 border rounded-lg bg-sec text-white hover:bg-red-200 hover:text-black">
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
