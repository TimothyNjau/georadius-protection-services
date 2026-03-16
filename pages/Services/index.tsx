import Image from "next/image";
import SecurityLineup from "@/public/assets/images/GPS 14.jpeg";
import ArmedGuard from "@/public/assets/images/GPS 5.jpeg";
import AlarmInstallation from "@/public/assets/images/alarm-installation.jpg";
import EventsProtection from "@/public/assets/images/event-security.jpg";
import CCTVInstallation from "@/public/assets/images/cctv-installation.jpg";
import DogTraining from "@/public/assets/images/dog-training.jpg";
import Investigating from "@/public/assets/images/investigation.jpg";

const Services = () => {
  return (
    <>
      <section className="">
        <div className="h-40 sm:h-56 md:h-[42vh] relative overflow-hidden mb-3 sm:mb-4">
          <Image
            src={SecurityLineup}
            alt="Image of our security in lineup during training"
            fill
            className="object-cover"
          />
          <div className="absolute bg-black/40 top-0 left-0 inset-0"></div>
          <div className="absolute top-8 sm:top-12 md:top-16 z-5 text-white font-bold left-3 sm:left-6 md:left-20 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
            OUR SERVICES
          </div>
        </div>
        <section className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 mx-auto py-3 sm:py-4 md:py-6 px-3 sm:px-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            At{" "}
            <span className="text-base sm:text-lg md:text-xl font-bold text-sec uppercase">
              Georadius Protection Services
            </span>
            , we provide comprehensive security solutions designed to protect
            people, property, and operations with the highest level of
            professionalism and reliability. Our services include trained
            on-site security personnel, mobile patrol units, event security
            management, surveillance monitoring, and detailed risk assessments.
            By combining experienced staff with modern security strategies, we
            ensure proactive protection, rapid response, and peace of mind for
            every client
          </p>
        </section>
        <section className="services-cont grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4 px-3 sm:px-6 mx-auto">
          <div className="py-2 sm:py-3">
            <h1 className="text-xl sm:text-2xl font-semibold hover:text-sec cursor-pointer">
              GUARD SERVICES
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Professional, highly trained security personnel providing vigilant
              on-site protection, access control, patrol monitoring, and rapid
              response to ensure the safety of people, property, and operations.
            </p>
            <div className="relative h-48 sm:h-64 md:h-80 w-full mt-3">
              <Image
                src={ArmedGuard}
                alt="Image of our manned security in training."
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="py-2 sm:py-3">
            <h1 className="text-xl sm:text-2xl font-semibold hover:text-sec cursor-pointer">
              ALARM SYSTEM INSTALLATION
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Expert installation of advanced alarm systems designed to detect
              unauthorized access, trigger immediate alerts, and provide
              reliable protection for residential and commercial properties.
            </p>
            <div className="relative h-48 sm:h-64 md:h-80 w-full mt-3">
              <Image
                src={AlarmInstallation}
                alt="Image of an alarm system"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="py-2 sm:py-3">
            <h1 className="text-xl sm:text-2xl font-semibold hover:text-sec cursor-pointer">
              EVENTS SECURITY
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Comprehensive event security management including crowd control,
              access screening, VIP protection, risk assessment, and coordinated
              response to ensure safe and orderly gatherings.
            </p>
            <div className="relative h-48 sm:h-64 md:h-80 w-full mt-3">
              <Image
                src={EventsProtection}
                alt="Image of event security at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="py-2 sm:py-3">
            <h1 className="text-xl sm:text-2xl font-semibold hover:text-sec cursor-pointer">
              DOG TRAINING
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Specialized canine training programs focused on obedience,
              detection, patrol support, and disciplined response to enhance
              security effectiveness and operational readiness.
            </p>
            <div className="relative h-48 sm:h-64 md:h-80 w-full mt-3">
              <Image
                src={DogTraining}
                alt="Image of security dogs in training"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="py-2 sm:py-3">
            <h1 className="text-xl sm:text-2xl font-semibold hover:text-sec cursor-pointer">
              CCTV INSTALLATION
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Professional installation of high-definition surveillance systems
              enabling continuous monitoring, evidence recording, remote access,
              and enhanced situational awareness for improved security control.
            </p>
            <div className="relative h-48 sm:h-64 md:h-80 w-full mt-3">
              <Image
                src={CCTVInstallation}
                alt="Image of CCTV camera, as a part of a system"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="py-2 sm:py-3">
            <h1 className="text-xl sm:text-2xl font-semibold hover:text-sec cursor-pointer">
              INVESTIGATION
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              Confidential and thorough investigative services delivering
              accurate intelligence, evidence gathering, surveillance, and
              detailed reporting to support informed decision-making and risk
              mitigation.
            </p>
            <div className="relative h-48 sm:h-64 md:h-80 w-full mt-3">
              <Image
                src={Investigating}
                alt="Image of investigation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;
