import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faWifi,
  faPeopleGroup,
  faMagnifyingGlass,
  faCamera,
  faDog,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSect = () => {
  return (
    <>
      <section className="py-4 sm:py-6 px-3 sm:pl-6 md:pl-8 m-auto">
        <section className="">
          <div className="py-3 sm:py-4">
            <h1 className="text-2xl sm:text-3xl text-sec font-bold underline underline-offset-4 mb-2 sm:mb-3">
              OUR SERVICES
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              We provide trusted security services built on expertise,
              discipline, and technology, ensuring safety, confidence, and peace
              of mind for our clients.
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            <div className="bg-gray-200 rounded-md p-3 sm:p-4 group hover:bg-purple-400 duration-300 transition-all cursor-default">
              <FontAwesomeIcon
                icon={faUserShield}
                className="text-2xl sm:text-3xl text-sec group-hover:text-white group-hover:scale-125"
              />
              <div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white mt-2">
                    Manned Guarding
                  </h2>
                  <p className="group-hover:text-white text-sm sm:text-base md:text-lg mt-1">
                    We provide disciplined, professional security personnel
                    dedicated to protecting people, property, and assets with
                    the highest standards of integrity and vigilance.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-3 sm:p-4 group hover:bg-purple-400 duration-300 transition-all cursor-default">
              <FontAwesomeIcon
                icon={faWifi}
                className="text-2xl sm:text-3xl text-sec group-hover:text-white group-hover:scale-125"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white mt-2">
                  Alarm Systems Installation
                </h2>
                <p className="group-hover:text-white text-sm sm:text-base md:text-lg mt-1">
                  {" "}
                  We design and install reliable, modern alarm systems that
                  detect threats early and enhance the safety of homes,
                  businesses, and institutions.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-3 sm:p-4 group hover:bg-purple-400 duration-300 transition-all cursor-default">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="text-2xl sm:text-3xl text-sec group-hover:text-white group-hover:scale-125"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white mt-2">
                  Events protection
                </h2>
                <p className="group-hover:text-white text-sm sm:text-base md:text-lg mt-1">
                  We deliver comprehensive event security solutions that ensure
                  safety, effective crowd control, and smooth operations from
                  start to finish.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-3 sm:p-4 group hover:bg-purple-400 duration-300 transition-all cursor-default">
              <FontAwesomeIcon
                icon={faDog}
                className="text-2xl sm:text-3xl text-sec group-hover:text-white group-hover:scale-125"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white mt-2">
                  Dog Training
                </h2>
                <p className="group-hover:text-white text-sm sm:text-base md:text-lg mt-1">
                  {" "}
                  We deploy highly trained K9 units and expert handlers to
                  provide advanced protection, detection, and rapid security
                  response.{" "}
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-3 sm:p-4 group hover:bg-purple-400 duration-300 transition-all cursor-default">
              <FontAwesomeIcon
                icon={faCamera}
                className="text-2xl sm:text-3xl text-sec group-hover:text-white group-hover:scale-125"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white mt-2">
                  CCTV Installation
                </h2>
                <p className="group-hover:text-white text-sm sm:text-base md:text-lg mt-1">
                  We install high-quality CCTV surveillance systems that provide
                  continuous monitoring, accountability, and enhanced security.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-3 sm:p-4 group hover:bg-purple-400 duration-300 transition-all cursor-default">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-2xl sm:text-3xl text-sec group-hover:text-white group-hover:scale-125"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-white mt-2">
                  {" "}
                  Investigation
                </h2>
                <p className="group-hover:text-white text-sm sm:text-base md:text-lg mt-1">
                  We conduct discreet, ethical, and accurate investigations,
                  delivering factual insights with professionalism and
                  confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ServicesSect;
