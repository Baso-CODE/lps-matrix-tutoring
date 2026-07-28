import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./Slider.css";

const desktopSliders = [
  {
    id: 1,
    src: "/images/slider/desktop-1.webp",
    alt: "Promo Les Privat UTBK SNBT - LPS Education",
  },
  {
    id: 2,
    src: "/images/slider/desktop-2.webp",
    alt: "Promo Bimbel CPNS - LPS Education",
  },
  {
    id: 3,
    src: "/images/slider/desktop-3.webp",
    alt: "Promo Les Privat SIMAK UI - LPS Education",
  },
];

const mobileSliders = [
  {
    id: 1,
    src: "/images/slider/mobile-1.webp",
    alt: "Promo Les Privat UTBK SNBT - LPS Education",
  },
  {
    id: 2,
    src: "/images/slider/mobile-2.webp",
    alt: "Promo Bimbel CPNS - LPS Education",
  },
  {
    id: 3,
    src: "/images/slider/mobile-3.webp",
    alt: "Promo Les Privat SIMAK UI - LPS Education",
  },
];

const Slider = () => {
  const [emblaRefDesktop] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);
  const [emblaRefMobile] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);

  return (
    <>
      {/* Slider desktop */}
      <div className="slider-top desktop-only">
        <div className="embla" ref={emblaRefDesktop}>
          <div className="embla__container">
            {desktopSliders.map((promo) => (
              <div className="embla__slide top-slider" key={promo.id}>
                <div className="slider">
                  <img
                    loading="lazy"
                    src={promo.src}
                    alt={promo.alt}
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider mobile */}
      <div className="slider-top-2 mobile-only">
        <div className="embla" ref={emblaRefMobile}>
          <div className="embla__container">
            {mobileSliders.map((promo) => (
              <div className="embla__slide top-slider" key={promo.id}>
                <div className="slider">
                  <img
                    loading="lazy"
                    src={promo.src}
                    alt={promo.alt}
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
