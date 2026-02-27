import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroSectionImage from "@/public/assets/images/GUARDS 1.jpeg";
import SecondarySecurity from "@/public/assets/images/GUARDS SHOWCASE 10.jpeg";
import { faEye, faBullseye, faShield } from "@fortawesome/free-solid-svg-icons";
import CoreValues from "@/components/common/CoreValues";

const About = () => {
  return (
    <>
      <main className="bg-white">
        <section className="mx-auto mb-6 sm:mb-8 md:mb-12">
          <div className="relative h-56 sm:h-72 md:h-96 lg:h-[40vh] overflow-hidden">
            <Image
              src={HeroSectionImage}
              alt="Hero section image of our security"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute bg-black/60 inset-0"></div>
            <p className="absolute w-5/6 sm:w-3/4 md:w-2/3 bottom-20 md:bottom-30 left-3 sm:left-6 items-center text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl z-10">
              A trusted security partner delivering professional guard services,
              advanced surveillance solutions, and reliable protection for
              businesses, communities, and events.
            </p>
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 z-20 flex gap-2">
              <button className="px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base bg-blue-200 cursor-pointer rounded-md hover:bg-blue-100">
                Request A Consultation
              </button>
              <button className="px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base bg-blue-200 cursor-pointer rounded-md hover:bg-blue-100">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="flex mb-6 sm:mb-8 md:mb-12 flex-col lg:flex-row px-3 sm:px-5 md:px-8 gap-4">
          <div className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
            <p>
              We are pleased to introduce{" "}
              <span className="text-sec font-semibold">
                GEORADIUS PROTECTION SERVICES (GPS)
              </span>
              , a professional security firm based in Ruiru Town, Kiambu County.
              Our mission is to combat insecurity by delivering reliable,
              client-focused protection solutions tailored to the unique needs
              of individuals, businesses, and institutions.
            </p>
            <p>
              We specialize in safeguarding property, commercial premises,
              events, private functions, and communities with a strong
              commitment to integrity, vigilance, and professionalism. Our
              approach goes beyond physical presence—we emphasize risk
              assessment, prevention, preparedness, and rapid response.
            </p>
            <p>
              By working closely with our clients, we design and implement
              customized security strategies aligned with their specific
              instructions and expectations. At{" "}
              <span className="text-sec font-semibold">
                GEORADIUS PROTECTION SERVICES
              </span>
              , your safety, peace of mind, and confidence remain our highest
              priority.
            </p>
          </div>
        </section>

        <section className="relative h-56 sm:h-72 md:h-96 lg:h-[50vh] overflow-hidden">
          <div>
            <Image
              src={SecondarySecurity}
              alt="Image of our security team at training"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bg-gray-400/80 inset-0"></div>
          <div className="z-10 absolute inset-0 flex flex-col items-center justify-center px-3">
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Who Are We
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:justify-center sm:px-4">
              <div className="w-full sm:w-1/2 md:w-2/5 bg-white/25 p-2 sm:p-3 md:p-4 rounded-md">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="text-2xl sm:text-3xl text-sec"
                  />
                  <h1 className="text-xl sm:text-2xl md:text-3xl text-sec font-semibold">
                    Our Mission
                  </h1>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-base transition-all mt-2">
                    The company&apos;s vision is to be the most reliable
                    security firm in Kenya with the ability to protect, respond
                    and combat any incident of insecurity within the shortest
                    time possible
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-2/5 bg-white/25 p-2 sm:p-3 md:p-4 rounded-md">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-2xl sm:text-3xl text-sec"
                  />
                  <h1 className="text-xl sm:text-2xl md:text-3xl text-sec font-semibold">
                    Our Vision
                  </h1>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-base transition-all mt-2">
                    To provide quality security services to people, businesses,
                    properties, events, occasions and all other places in need
                    of vigilance in our Kenyan society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative h-20 sm:h-28 md:h-40 lg:h-[30vh] bg-[url('/assets/images/global-image.jpg')] 
             bg-cover bg-center bg-fixed"
        ></section>

        <section className="min-h-screen mt-4 sm:mt-6 md:mt-8 px-3 sm:px-6 py-4 sm:py-6 md:py-8">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-sec mb-3 sm:mb-4 md:mb-6">
            Why Choose Us
          </h1>
          <p className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 mx-auto text-sm sm:text-base md:text-lg">
            Choose{" "}
            <span className="text-prim font-semibold">
              GEORADIUS PROTECTION SERVICES
            </span>{" "}
            for dependable, professional security tailored to your needs. We
            combine trained personnel, modern technology, and rapid response
            systems to deliver consistent protection. Our client-focused
            approach ensures customized solutions, clear communication, and
            accountability at every stage. With integrity, vigilance, and proven
            reliability, we provide peace of mind so you can operate confidently
            and securely.
          </p>
          <CoreValues />
        </section>
      </main>
    </>
  );
};

export default About;
