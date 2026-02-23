import Image from "next/image";
import Security1 from "@/assets/images/security1.jpg";
import Link from "next/link";


const VideoBanner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden mb-30">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        src="/video/guards_video.mp4"
        autoPlay
        muted
        playsInline
        loop={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/55"></div>

      <div className="relative z-2 flex flex-col justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            We Secure, God Protects
        </h1>
        <p className='text-lg md:text-2xl lg:text-3xl mb-6'>
            Professional security solutions you can trust
        </p>        
      </div>
      <button>
        <Link href={'Quote'} className="absolute bottom-0 right-0 w-sm bg-sec hover:bg-sec/40 px-1 py-2 rounded-md transition-colors duration-300 text-center text-white text-2xl ">
            Request A Quote
        </Link>
      </button>
      <Link href={'Quote'} className="absolute z-3 bottom-0 right-0 w-sm bg-sec hover:bg-sec/40 px-1 py-2 rounded-md transition-colors duration-300 text-center text-white text-2xl ">
            Request A Quote
        </Link>
      <div>
        <h1></h1>
      </div>
    </section>
  );
};
export default VideoBanner;

