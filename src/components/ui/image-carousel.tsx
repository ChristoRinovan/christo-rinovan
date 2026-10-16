"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const profileImage = [
  { src: "/images/profile/profile.jpg", alt: "Potrait of Christo Rinovan" },
  { src: "/images/profile/profile2.JPG", alt: "Potrait of Christo Rinovan" },
  { src: "/images/profile/profile3.JPG", alt: "Potrait of Christo Rinovan" },
];

const DELAY = 4000; //ms

export default function ImageCarousels() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: DELAY,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    [],
  );

  return (
    <div className="absolute inset-0 flex">
      <Carousel
        withControls={false}
        withIndicators={false}
        emblaOptions={{ loop: true, watchDrag: false }}
        plugins={[autoplay]}
        className="h-full w-full flex-1"
        classNames={{ viewport: "h-full", container: "h-full", slide: "h-full" }}
        height="100%"
      >
        {profileImage.map((img, i) => (
          <Carousel.Slide key={img.src}>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 62rem) 55vw, 100vw"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
