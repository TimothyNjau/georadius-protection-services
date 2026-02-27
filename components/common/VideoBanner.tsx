import Image from "next/image";
import Security1 from "@/assets/images/security1.jpg";
import Link from "next/link";

const VideoBanner = () => {
  return (
    <section className="relative w-full h-64 sm:h-96 md:h-[50vh] lg:h-screen overflow-hidden mb-6 md:mb-10 lg:mb-20">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        src="/video/guards_video.mp4"
        autoPlay
        muted
        playsInline
        loop={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/55"></div>

      <div className="relative z-2 flex flex-col justify-center h-full text-center text-white px-3 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4">
          We Secure, God Protects
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl mb-4 sm:mb-6">
          Professional security solutions you can trust
        </p>
      </div>
      <Link
        href={"Quote"}
        className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-sec hover:bg-sec/40 px-3 sm:px-4 py-2 rounded-md transition-colors duration-300 text-center text-white text-sm sm:text-base md:text-lg lg:text-xl z-10"
      >
        Request A Quote
      </Link>
    </section>
  );
};
export default VideoBanner;
