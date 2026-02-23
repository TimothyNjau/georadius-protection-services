"use client"; 

import { Carousel } from "react-responsive-carousel";
import Image, { StaticImageData } from "next/image";
import Security1 from '@/assets/images/GPS 14.jpeg'
import Security2 from "@/assets/images/GPS 5.jpeg";
import Security3 from "@/assets/images/GUARDS 1.jpeg";
import Security4 from "@/assets/images/GUARDS LINEUP 2.jpeg";

interface CarouselImage {
    id: number,
    src: StaticImageData,
    alt: string,
    legend: string,
}

const images: CarouselImage[] = [
    {id: 1, src: Security1, alt: 'Image of Guard line-up', legend: 'Our security guards at a lineup'},
    {id: 2, src: Security2, alt: 'Security guard at work', legend: 'The security guard at work'},
    {id: 3, src: Security3, alt: 'Security Guard at parade', legend: 'Whenever we are training our security, we have professional services'},
    {id: 4, src: Security4, alt: 'Security guard inspection', legend: 'We take security inspections very seriously'}
]
const ImageCarousel: React.FC = () => {
  return (
    <div className="w-5/7 mx-auto">
      <Carousel 
        showArrows={true} 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={3000}
      >
        {images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              width={800} // Set appropriate width and height
              //height={400}
              layout="responsive" // Make the image responsive
            />
            <p className="legend">{image.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};



export default ImageCarousel;