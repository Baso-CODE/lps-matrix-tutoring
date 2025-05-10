/* eslint-disable no-unused-vars */
import "./Slider.css";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "lazysizes";
const Slider = () => {
  // Embla hook with Autoplay plugin
  // Embla hook with Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);

  const imagesDesktop = [
    "/images/slider/DESKTOP-1.webp",
    "/images/slider/DESKTOP-2.webp",
    "/images/slider/DESKTOP-3.webp",
  ];

  const imagesMobile = [
    "/images/slider/HP-1.webp",
    "/images/slider/HP-2.webp",
    "/images/slider/HP-3.webp",
  ];

  const lazyLoadImage = (src, alt) => (
    <img
      loading="lazy"
      data-src={src}
      alt={alt}
      className="lazyload"
      width="100%"
      height="auto"
    />
  );

  return (
    <React.Fragment>
      {/* Slider for desktop */}
      <div className="slider-top desktop-only">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {imagesDesktop.map((src, index) => (
              <div className="embla__slide top-slider" key={index}>
                <div className="slider">
                  {lazyLoadImage(
                    src,
                    `Gambar slider ${
                      index + 1
                    } untuk desktop, menampilkan testimoni pelanggan dengan desain responsif yang ideal untuk layar besar`
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider for mobile */}
      <div className="slider-top-2 mobile-only">
        <div className="embla" ref={emblaRef2}>
          <div className="embla__container">
            {imagesMobile.map((src, index) => (
              <div className="embla__slide top-slider" key={index}>
                <div className="slider">
                  {lazyLoadImage(
                    src,
                    `Gambar slider ${
                      index + 1
                    } untuk perangkat mobile, dirancang untuk menampilkan testimoni pelanggan dengan tampilan optimal pada layar kecil`
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Slider;
