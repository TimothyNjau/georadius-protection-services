import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/GPS_LOGO.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="relative m-auto h-auto mb-3 md:mb-5 md:px-6 rounded-b-xl">
      <div className="flex min-h-10 items-center justify-between">
        <div>
          <Image
            src={Logo}
            alt="GPS Security Logo"
            className="w-12 sm:w-16 md:w-20 lg:w-24"
          />
        </div>

        <ul className="hidden md:flex md:w-3/5 lg:w-2/3 my-2 text-base lg:text-lg xl:text-xl justify-around gap-2 font-bold">
          <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
            <Link href="About">About Us</Link>
          </li>
          <li className="py-2 px-1 hover:scale-110 hover:text-sec transition-all duration-400 cursor-pointer">
            <Link href="Services">Solutions</Link>
          </li>
          <li className="px-3 py-2 bg-sec cursor-pointer rounded-xl text-white hover:bg-red-200 hover:scale-110 hover:text-black transition-all duration-all">
            <Link href="Contact">Contact Us</Link>
          </li>
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden text-2xl sm:text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-10 text-2xl bg-black/90 text-white z-40">
            <li className="hover:text-sec transition-all duration-200 py-2">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-sec transition-all duration-200 py-2">
              <Link href="About" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="hover:text-sec transition-all duration-200 py-2">
              <Link href="Services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className="hover:text-sec transition-all duration-200 py-2">
              <Link href="Career" onClick={() => setIsOpen(false)}>
                Join Us
              </Link>
            </li>
            <li className="transition-all duration-200 py-2 px-2 border rounded-lg bg-sec text-white hover:bg-red-200 hover:text-black">
              <Link href="Contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;