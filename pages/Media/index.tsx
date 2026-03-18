import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const mediaImages = [
  "GUARDS SHOWCASE 6.jpeg",
  "GUARDS LINEUP 5.jpeg",
  "GPS 17.jpeg",
  "GPS 20.jpeg",
  "dog-training.jpg",
  "dog-training (2).jpg",
  "GUARDS 1.jpeg",
  "GUARDS LINEUP 2.jpeg",
  "GUARDS SHOWCASE 10.jpeg",
  "GPS 5.jpeg",
  "GPS 14.jpeg",
  "GPS 10.jpeg",
];

const MediaPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <Head>
        <title>Media | GeoRadius Protection Services</title>
        <meta
          name="description"
          content="Explore GeoRadius Protection Services media gallery: security installations, team, events, and training videos."
        />
      </Head>

      <section className="mx-4 mt-10 md:mx-8 lg:mx-16 mb-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sec font-bold uppercase tracking-[0.3em] text-sm mb-2">
            Media Gallery
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-2">
            See Our Work in Action
          </h1>
          <p className="text-base md:text-lg text-[#303030] leading-relaxed">
            Browse our image and video gallery to explore our security solutions,
            installations, team operations, and training environment.
          </p>
          <p className="block md:hidden mt-2 text-xs text-slate-500">
            Tap image to enlarge
          </p>
        </div>

        <div className="mt-10 max-w-6xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mediaImages.map((image) => (
              <article
                key={image}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={`/assets/images/${image}`}
                    alt={`GeoRadius media: ${image}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
              Video Showcase
            </h2>
            <p className="text-slate-600 mt-2">
              Watch a quick highlight of our team in action and real project deployment.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
            <video
              controls
              className="w-full"
              poster="/assets/images/global-image.jpg"
            >
              <source src="/video/guards_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="button"
          aria-label="Close image lightbox"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
        >
          <div
            className="relative max-w-4xl w-full h-full md:h-auto md:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/assets/images/${currentImage}`}
              alt="Enlarged media"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 bg-white/90 text-black rounded-full px-3 py-1 font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaPage;
