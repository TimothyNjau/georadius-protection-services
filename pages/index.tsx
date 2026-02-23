import AboutHomeSect from "@/components/common/AboutHomeSect";
import ServicesSect from "@/components/common/ServicesSect";
import VideoBanner from "@/components/common/VideoBanner";
import FixedImageSection from "@/components/common/FixedImageSection";

const Home = () => {

  return (
    <>
      <VideoBanner />
      <AboutHomeSect />
      <FixedImageSection />
      <ServicesSect />
    </>
  )
};

export default Home;