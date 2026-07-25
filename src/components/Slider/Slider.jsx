import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { getSliderDescktop } from "../../api/slider/getSliderDescktop";
import { getSliderMobile } from "../../api/slider/getSliderMobile";
import "./Slider.css";

const Slider = () => {
  const [desktopSliders, setDesktopSliders] = useState([]);
  const [mobileSliders, setMobileSliders] = useState([]);

  const [emblaRefDesktop] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);
  const [emblaRefMobile] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const [desktopResult, mobileResult] = await Promise.all([
          getSliderDescktop(),
          getSliderMobile(),
        ]);
        if (desktopResult.status === 200) setDesktopSliders(desktopResult.data);
        if (mobileResult.status === 200) setMobileSliders(mobileResult.data);
      } catch (err) {
        console.error("Error fetching slider data:", err);
      }
    };
    fetchSliders();
  }, []);

  return (
    <>
      {/* Slider desktop */}
      <div className="slider-top desktop-only">
        <div className="embla" ref={emblaRefDesktop}>
          <div className="embla__container">
            {desktopSliders.length > 0 ? (
              desktopSliders.map((promo) => (
                <div className="embla__slide top-slider" key={promo.id}>
                  <div className="slider">
                    <img
                      loading="lazy"
                      src={promo.link_image}
                      alt={`Gambar slider ${promo.id} untuk desktop, menampilkan promo ${promo.keterangan}`}
                      width="100%"
                      height="auto"
                    />
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

      {/* Slider mobile */}
      <div className="slider-top-2 mobile-only">
        <div className="embla" ref={emblaRefMobile}>
          <div className="embla__container">
            {mobileSliders.length > 0 ? (
              mobileSliders.map((promo) => (
                <div className="embla__slide top-slider" key={promo.id}>
                  <div className="slider">
                    <img
                      loading="lazy"
                      src={promo.link_image}
                      alt={`Gambar slider ${promo.id} untuk perangkat mobile, menampilkan promo ${promo.keterangan}`}
                      width="100%"
                      height="auto"
                    />
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
    </>
  );
};

export default Slider;
