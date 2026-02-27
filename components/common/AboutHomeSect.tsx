import { faEye, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutHomeSect = () => {
  return (
    <>
      <section className="bg-[#dde4e4] flex flex-col lg:flex-row gap-4 sm:gap-6 wrap justify-around px-3 sm:pl-6 md:pl-8 pt-4 sm:pt-6">
        <div className="">
          <div className="">
            <h1 className="text-2xl sm:text-3xl text-sec font-bold underline underline-offset-4 mb-2 sm:mb-3">
              ABOUT US
            </h1>
            <span className="w-32 h-2 bg-sec block"></span>
          </div>
          <p className="text-sm sm:text-base md:text-lg mt-3">
            GEORADIUS PROTECTION SERVICES (GPS) is among the leading security
            service providers, and we are on a mission to combat insecurity and
            offer reliable protection to property, businesses, people, events,
            and occasions as per the client instructions.
          </p>
        </div>
        <div className="mb-3 sm:mb-5 flex flex-col gap-2 sm:gap-3">
          <div className="group py-2 sm:py-3 px-3 sm:px-4 w-full rounded-md hover:bg-purple-500 transition-all duration-300 cursor-default">
            <FontAwesomeIcon
              icon={faEye}
              className="text-2xl sm:text-3xl py-2 sm:py-3 text-sec group-hover:text-white group-hover:scale-125 transition-all"
            />
            <h1 className="text-xl sm:text-2xl text-sec font-semibold group-hover:text-white transition-all">
              Our Vision
            </h1>
            <span></span>
            <p className="group-hover:text-white transition-all text-sm sm:text-base mt-2">
              The company&apos;s vision is to be the most reliable security firm
              in Kenya with the ability to protect, respond and combat any
              incident of insecurity within the shortest time possible
            </p>
          </div>
          <div className="group py-2 sm:py-3 px-3 sm:px-4 w-full rounded-md hover:bg-purple-500 transition-all duration-300 cursor-default">
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-2xl sm:text-3xl py-2 sm:py-3 text-sec group-hover:text-white group-hover:scale-125 transition-all"
            />
            <h1 className="text-xl sm:text-2xl text-sec font-semibold group-hover:text-white transition-all">
              Our Mission
            </h1>
            <span></span>
            <p className="group-hover:text-white transition-all text-sm sm:text-base mt-2">
              To provide quality security services to people, businesses,
              properties, events, occasions and all other places in need of
              vigilance in our Kenyan society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeSect;
