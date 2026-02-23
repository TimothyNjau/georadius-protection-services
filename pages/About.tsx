import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroSectionImage from "@/public/assets/images/GUARDS 1.jpeg";
import SecondarySecurity from "@/public/assets/images/GUARDS SHOWCASE 10.jpeg";
import { faEye, faBullseye, faShield } from "@fortawesome/free-solid-svg-icons";
import GlobalImage from "@/public/assets/images/global-image.jpg";

const About = () => {
  return (
    <>
      <main>
        <section className="mx-auto mb-12">
          <div className="relative h-[20vh] overflow-hidden">
            <Image
              src={HeroSectionImage}
              alt="Hero section image of our security"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute bg-black/60 inset-0"></div>
            <p className="relative w-250 place-self-center mt-4 text-white font-semibold text-2xl z-10">
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

        <section className="flex mb-12 justify-evenly">
          <div className="relative h-[40vh] w-[50vw] overflow-hidden">
            <Image
              src={SecondarySecurity}
              alt=" Image of our security at training"
              className="object-cover"
            />
          </div>
          <div>
            <p></p>
            <ol className="h-[70%] flex flex-col justify-around  text-2xl font-medium">
              <li>Licensed & insured</li>
              <li>Professionally trained personnel</li>
              <li>Modern technology integration</li>
            </ol>
          </div>
        </section>

        <section className="flex px-4 justify-around mb-12">
          <div className="w-3/7">
            <div> 
                <FontAwesomeIcon icon={faBullseye}  className="text-3xl"/>
            </div>
            <div>
              <h1 className="text-3xl text-sec font-semibold">Our Mission</h1>
              <p className=" text-lg transition-all w-[full]">
                The company&apos;s vision is to be the most reliable security
                firm in Kenya with the ability to protect, respond and combat
                any incident of insecurity within the shortest time possible
              </p>
            </div>
          </div>
          <div className="w-3/7">
            <div>
                <FontAwesomeIcon icon={faEye} className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl text-sec font-semibold">Our Vision</h1>
              <p className="text-lg group-hover:text-white transition-all w-full">
                To provide quality security services to people, businesses,
                properties, events, occasions and all other places in need of
                vigilance in our Kenyan society.
              </p>
            </div>
          </div>
        </section>

        <section className="flex px-2 items-center justify-center text-xl gap-3 mb-12">
          <div>
            <ol>
              <li>Integrity</li>
              <li>Professionalism</li>
              <li>Vigilance</li>
            </ol>
          </div>
          <div>
            <FontAwesomeIcon icon={faShield} className="text-3xl" />
          </div>
          <div>
            <ol>
              <li>Accountability</li>
              <li>Discipline</li>
              <li>Client Commitment</li>
            </ol>
          </div>
        </section>

        <section className="">
          <div className="h-[40vh] overflow-hidden relative">
            <Image src={GlobalImage} alt="Image of globe" fill className="object-cover" />
            <div></div>
            <button>Contact Button</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
