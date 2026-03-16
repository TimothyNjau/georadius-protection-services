import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="GeoRadius Protection Services - trusted security company in Kenya offering manned guarding, event security, CCTV installation, alarm systems, dog training, investigation and consultation."
        />
        <meta
          name="keywords"
          content="security Kenya, security company, security services, manned guarding, CCTV installation, alarm system, dog training, event security, protective services, Kenya security"
        />
        <meta name="author" content="GeoRadius Protection Services" />
        <link rel="canonical" href="https://www.georadiusprotection.com" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GeoRadius Protection Services | Security Company in Kenya"
        />
        <meta
          property="og:description"
          content="Secure your business and events with trusted security solutions in Kenya. Manned guarding, CCTV, alarms, dog training, and investigations."
        />
        <meta property="og:url" content="https://www.georadiusprotection.com" />
        <meta property="og:image" content="/assets/images/security-hero.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GeoRadius Protection Services | Security Kenya"
        />
        <meta
          name="twitter:description"
          content="Professional security company in Kenya offering comprehensive protective services for homes, offices, construction sites, and events."
        />
        <meta name="twitter:image" content="/assets/images/security-hero.jpg" />

        <meta name="theme-color" content="#0f172a" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GeoRadius Protection Services",
              description:
                "Security company in Kenya offering manned guarding, CCTV installation, alarm systems, dog training, and investigations.",
              url: "https://www.georadiusprotection.com",
              telephone: "+254725572720",
              address: {
                "@type": "PostalAddress",
                streetAddress: "First Floor, Rowini House",
                addressLocality: "Ruiru",
                addressRegion: "Kenya",
                postalCode: "00100",
                addressCountry: "KE",
              },
              openingHours: "Mo,Tu,We,Th,Fr,Sa 08:00-18:00",
              sameAs: [
                "https://www.facebook.com/georadiusprotection",
                "https://www.instagram.com/georadiusprotection",
              ],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
