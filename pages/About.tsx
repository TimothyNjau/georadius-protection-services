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
        <section className="mx-auto mb-12">
          <div className="relative h-[40vh] overflow-hidden">
            <Image
              src={HeroSectionImage}
              alt="Hero section image of our security"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute bg-black/60 inset-0"></div>
            <p className="absolute w-270 bottom-30 left-20 items-center text-white font-semibold text-2xl z-10">
              A trusted security partner delivering professional guard services,
              advanced surveillance solutions, and reliable protection for
              businesses, communities, and events.
            </p>
            <div className="absolute bottom-1 right-3 z-20 flex flex-col lg:flex-row gap-2">
              <button className="px-3 py-2 bg-blue-200 cursor-pointer rounded-md hover:bg-blue-100 ">
                Request A Consultation
              </button>
              <button className="px-3 py-2 bg-blue-200 cursor-pointer rounded-md hover:bg-blue-100">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="flex mb-12 flex-col lg:flex-row px-5">
          <div className=" flex flex-col gap-3 text-lg">
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

        <section className="relative h-[50vh] overflow-hidden">
          <div>
            <Image
              src={SecondarySecurity}
              alt="Image of our security team at training"
              fill
              className="object-cover"
            />
          </div>
          <div className=" absolute bg-gray-400/80 inset-0"></div>
          <div className="z-10 absolute top-20">
            <div className="text-center text-4xl mb-8 font-bold">
              <h1>Who Are We</h1>
            </div>
            <div className="flex justify-around px-4">
              <div className="w-3/7 bg-white/25 p-3 rounded-md">
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="text-3xl text-sec"
                  />
                  <h1 className="text-3xl text-sec font-semibold">
                    Our Mission
                  </h1>
                </div>
                <div>
                  <p className=" text-lg transition-all w-[full]">
                    The company&apos;s vision is to be the most reliable
                    security firm in Kenya with the ability to protect, respond
                    and combat any incident of insecurity within the shortest
                    time possible
                  </p>
                </div>
              </div>
              <div className="w-3/7 bg-white/25 p-3 rounded-md">
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faEye} className="text-3xl text-sec" />
                  <h1 className="text-3xl text-sec font-semibold">
                    Our Vision
                  </h1>
                </div>
                <div>
                  <p className="text-lg group-hover:text-white transition-all w-full">
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
          className="relative h-[30vh] bg-[url('/assets/images/global-image.jpg')] 
             bg-cover bg-center bg-fixed"
        ></section>

        <section className="h-[50vh] mt-5">
          <h1 className="text-center text-3xl font-semibold text-sec mb-2">
            Why Choose Us
          </h1>
          <p className="w-[80vw] mx-auto">
            Choose {" "}
            <span className="text-prim font-semibold">
              GEORADIUS PROTECTION SERVICES
            </span> {" "}
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
