import Head from "next/head";
import AboutHomeSect from "@/components/common/AboutHomeSect";
import ServicesSect from "@/components/common/ServicesSect";
import VideoBanner from "@/components/common/VideoBanner";
import FixedImageSection from "@/components/common/FixedImageSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>GeoRadius Protection Services | Security Company in Kenya</title>
        <meta
          name="description"
          content="GeoRadius Protection Services is a top security company in Kenya offering manned guarding, CCTV installation, alarm systems, event and corporate security."
        />
        <meta
          name="keywords"
          content="security company kenya, security services, manned guarding, CCTV installation, alarm system, event security, protective services"
        />
        <meta
          property="og:title"
          content="GeoRadius Protection Services | Security Company in Kenya"
        />
        <meta
          property="og:description"
          content="Trusted security services in Kenya: manned guarding, CCTV, alarms, event security, dog training and investigations."
        />
      </Head>
      <VideoBanner />
      <AboutHomeSect />
      <FixedImageSection />
      <ServicesSect />
    </>
  );
};

export default Home;
