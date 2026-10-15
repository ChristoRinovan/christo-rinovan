"use client";

import { useRef } from "react";
import Image from "next/image";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const profileImage = [
  { src: "/images/profile/profile.jpg", alt: "Potrait of Christo Rinovan" },
  { src: "/images/profile/profile2.JPG", alt: "Potrait of Christo Rinovan" },
  { src: "/images/profile/profile3.JPG", alt: "Potrait of Christo Rinovan" },
];

const DELAY = 4000; //ms

export default function ImageCarousels() {
  const autoplay = useRef(
    Autoplay({
      delay: DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  return (
    <Carousel
      withControls={false}
      withIndicators={false}
      emblaOptions={{ loop: true, watchDrag: false }}
      plugins={[autoplay.current]}
      className="pointer-events-none w-[80vw] max-w-[352px] lg:w-[352px]"
      classNames={{ viewport: "h-full", container: "h-full" }}
      height={440}
    >
      {profileImage.map((img, i) => (
        <Carousel.Slide key={img.src}>
          <div className="relative h-full w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 992px) 80vw, 352px"
              className="hero-photo-img"
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
