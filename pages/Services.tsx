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
        <div className="h-[42vh] relative overflow-hidden mb-4">
          <Image
            src={SecurityLineup}
            alt="Image of our security in lineup during training"
            fill
            className="object-cover"
          />
          <div className="absolute bg-black/40 top-0 left-0 inset-0"></div>
          <div className="absolute top-[50] z-5 text-white font-bold left-20 text-2xl lg:text-5xl">
            {" "}
            OUR SERVICES
          </div>
        </div>
        <section className="w-[60vw] mx-auto py-3">
          <p className="text-2xl lg:text-xl">
            At <span className="text-xl font-bold text-sec uppercase">Georadius Protection Services</span>, we provide comprehensive security
            solutions designed to protect people, property, and operations with
            the highest level of professionalism and reliability. Our services
            include trained on-site security personnel, mobile patrol units,
            event security management, surveillance monitoring, and detailed
            risk assessments. By combining experienced staff with modern
            security strategies, we ensure proactive protection, rapid response,
            and peace of mind for every client
          </p>
        </section>
        <section className="services-cont grid grid-cols-1 lg:grid-cols-2 lg:gap-6 pt-2 px-3 mx-auto">
          <div className="py-2">
            <h1 className="text-2xl font-semibold hover:text-sec cursor-pointer">GUARD SERVICES</h1>
            <p className="text-lg w-[40vw]">
              Professional, highly trained security personnel providing vigilant
              on-site protection, access control, patrol monitoring, and rapid
              response to ensure the safety of people, property, and operations.
            </p>
            <div className="relative h-112.5 w-full">
              <Image
                src={ArmedGuard}
                alt="Image of our manned security in training."
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-2xl font-semibold hover:text-sec cursor-pointer">ALARM SYSTEM INSTALLATION</h1>
            <p className="text-lg w-[40vw]">
              Expert installation of advanced alarm systems designed to detect
              unauthorized access, trigger immediate alerts, and provide
              reliable protection for residential and commercial properties.
            </p>
            <div className="relative h-112.5 w-full ">
              <Image
                src={AlarmInstallation}
                alt="Image of an alarm system"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold hover:text-sec cursor-pointer">EVENTS SECURITY</h1>
            <p className="text-lg w-[40vw]">
              Comprehensive event security management including crowd control,
              access screening, VIP protection, risk assessment, and coordinated
              response to ensure safe and orderly gatherings.
            </p>
            <div className="relative h-112.5 w-full ">
              <Image
                src={EventsProtection}
                alt="Image of event security at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold hover:text-sec cursor-pointer">DOG TRAINING</h1>
            <p className="text-lg w-[40vw]">
              Specialized canine training programs focused on obedience,
              detection, patrol support, and disciplined response to enhance
              security effectiveness and operational readiness.
            </p>
            <div className="relative h-112.5 w-full ">
              <Image
                src={DogTraining}
                alt="Image of security dogs in training"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold hover:text-sec cursor-pointer">CCTV INSTALLATION</h1>
            <p className="text-lg w-[40vw]">
              Professional installation of high-definition surveillance systems
              enabling continuous monitoring, evidence recording, remote access,
              and enhanced situational awareness for improved security control.
            </p>
            <div className="relative h-112.5 w-full">
              <Image
                src={CCTVInstallation}
                alt="Image of CCTV camera, as a part of a system"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold hover:text-sec cursor-pointer">INVESTIGATION</h1>
            <p className="text-lg w-[40vw]">
              Confidential and thorough investigative services delivering
              accurate intelligence, evidence gathering, surveillance, and
              detailed reporting to support informed decision-making and risk
              mitigation.
            </p>
            <div className="relative h-112.5 w-full">
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
