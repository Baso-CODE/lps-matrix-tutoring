/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import "./Slider.css";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "lazysizes";
import { getSliderDescktop } from "../../api/slider/getSliderDescktop";
import { getSliderMobile } from "../../api/slider/getSliderMobile";
const Slider = () => {
  const [desktopSliders, setDesktopSliders] = useState([]);
  const [mobileSliders, setMobileSliders] = useState([]);

  // Embla hook with Autoplay plugin
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);
  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const desktopResult = await getSliderDescktop();
        const mobileResult = await getSliderMobile();

        if (desktopResult.status === 200 && mobileResult.status === 200) {
          setDesktopSliders(desktopResult.data);
          setMobileSliders(mobileResult.data);
        } else {
          throw new Error("Failed to fetch some slider data.");
        }
      } catch (err) {
        console.error("Error fetching slider data:", err);
      }
    };

    fetchSliders();
  }, []);

  const lazyLoadImage = useCallback(
    (src, alt) => (
      <img
        loading="lazy"
        data-src={src}
        alt={alt}
        className="lazyload"
        width="100%"
        height="auto"
      />
    ),
    []
  );

  return (
    <React.Fragment>
      {/* Slider for desktop */}
      <div className="slider-top desktop-only">
        <div className="embla" ref={emblaRefDesktop}>
          <div className="embla__container">
            {desktopSliders?.length > 0 ? (
              desktopSliders.map((promo) => (
                <div className="embla__slide top-slider" key={promo.id}>
                  <div className="slider">
                    {lazyLoadImage(
                      promo.link_image,
                      `Gambar slider ${promo.id} untuk desktop, menampilkan promo ${promo.keterangan}`
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="slider-placeholder">
                <p>Banner tidak tersedia.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slider for mobile */}
      <div className="slider-top-2 mobile-only">
        <div className="embla" ref={emblaRefMobile}>
          <div className="embla__container">
            {mobileSliders?.length > 0 ? (
              mobileSliders.map((promo) => (
                <div className="embla__slide top-slider" key={promo.id}>
                  <div className="slider">
                    {lazyLoadImage(
                      promo.link_image,
                      `Gambar slider ${promo.id} untuk perangkat mobile, menampilkan promo ${promo.keterangan}`
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="slider-placeholder mobile-size">
                <p>Banner tidak tersedia.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Slider;
