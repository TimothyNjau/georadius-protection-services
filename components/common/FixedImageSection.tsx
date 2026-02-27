import Image from "next/image";
import SecurityImage from "@/public/assets/images/GUARDS LINEUP 2.jpeg";

const FixedImageSection = () => {
  return (
    <>
      <section className="h-40 sm:h-56 md:h-72 lg:h-[40vh] relative overflow-hidden">
        <Image
          src={SecurityImage}
          alt="Image of our security guards in a lineup during training"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </section>
    </>
  );
};

export default FixedImageSection;
