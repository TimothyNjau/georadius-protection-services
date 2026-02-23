import {
  faEye,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutHomeSect = () => {
  return (
    <>
      <section className="bg-[#dde4e4] flex flex-col lg:flex-row wrap justify-around pl-8 pt-4 ">
        <div className="">
          <div className="">
            <h1 className="text-3xl text-sec font-bold underline underline-offset-4 mb-3 ">ABOUT US</h1>
            <span className="w-32 h-2 bg-sec"></span>
          </div>
          <p className="md:text-lg">
            GEORADIUS PROTECTION SERVICES (GPS) is among the leading security
            service providers, and we are on a mission to combat insecurity and
            offer reliable protection to property, businesses, people, events,
            and occasions as per the client instructions.
          </p>
        </div>
        <div className="mb-5 flex flex-col">
          <div className=" group py-2 px-3 w-full rounded-md hover:bg-purple-500 transition-all duration-300 cursor-default">
            <FontAwesomeIcon
              icon={faEye}
              className="text-3xl py-3 text-sec group-hover:text-white group-hover:scale-125 transition-all"
            />
            <h1 className=" text-2xl text-sec font-semibold group-hover:text-white transition-all">
              Our Vision
            </h1>
            <span></span>
            <p className=" group-hover:text-white transition-all w-[full]">
              The company&apos;s vision is to be the most reliable security firm
              in Kenya with the ability to protect, respond and combat any
              incident of insecurity within the shortest time possible
            </p>
          </div>
          <div className=" group py-2 px-3 w-full rounded-md hover:bg-purple-500 transition-all duration-300 cursor-default">
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-3xl py-3 text-sec group-hover:text-white group-hover:scale-125 transition-all"
            />
            <h1 className="text-2xl text-sec font-semibold group-hover:text-white transition-all">
              Our Mission
            </h1>
            <span></span>
            <p className=" group-hover:text-white transition-all w-full">
              To provide quality security services to people, businesses, properties, events, occasions and all other places in need of vigilance in our Kenyan society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeSect;
