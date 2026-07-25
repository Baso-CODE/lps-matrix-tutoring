import useEmblaCarousel from "embla-carousel-react";
import { MoveRight } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSuccesStoryCPNS } from "../../../../../api/succesStoryCpns/getSuccesStoryCPNS";
import "./SuccesStoryCPNS.css";

const SuccesStoryCPNS = ({ city: cityProp }) => {
  const [succesStories, setSuccessStories] = useState([]);

  const location = useLocation();
  const path = location.pathname;

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    async function fetchSuccessStories() {
      try {
        const result = await getSuccesStoryCPNS();
        setSuccessStories(result.data);
      } catch (error) {
        console.error("Failed to fetch success stories", error);
      }
    }
    fetchSuccessStories();
  }, []);

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  return (
    <div className="success-story-cpns-container">
      <div className="success-story-cpns-wrapper">
        <div className="success-story-cpns-content">
          <div className="success-story-cpns-left">
            <h2 className="success-story-cpns-subtitle">
              Success Stories CPNS & Kedinasan
            </h2>
            <p className="success-story-cpns-description">
              LPS Education telah membantu banyak siswa dalam meraih kesuksesan
              dan merancang program untuk memberikan dampak positif dan
              signifikan dalam perkembangan akademik dan pribadi setiap siswa
              melalui pendekatan pendidikan yang inovatif.
            </p>
            <p className="success-story-cpns-description">
              Dari bimbingan intensif hingga program pengembangan keterampilan,
              Success Story kami menunjukkan komitmen kami terhadap pendidikan
              yang berkualitas dan hasil yang nyata bagi setiap peserta didik.
            </p>

            <div className="success-story-cpns-swipe-info">
              <span className="success-story-cpns-swipe-text">
                Swipe Card to see more
              </span>
              <MoveRight className="success-story-cpns-swipe-icon" />
            </div>
          </div>

          <div className="success-story-cpns-swiper-container">
            <div className="embla success-story-cpns-swiper" ref={emblaRef}>
              <div className="embla__container">
                {succesStories.map((story, index) => {
                  const altText = `Testimoni siswa ${story.name || "LPS"} mengenai Bimbel & Les Privat CPNS bersama LPS Education${city ? " di " + city : ""}. Program persiapan Tes CPNS dengan bimbingan tutor berpengalaman dan strategi lolos seleksi ASN.`;
                  return (
                    <div
                      key={index}
                      className="embla__slide success-story-cpns-swiper-slide">
                      <img
                        loading="lazy"
                        src={story.link_image}
                        alt={altText}
                        className="success-story-cpns-swiper-image"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SuccesStoryCPNS.propTypes = {
  city: PropTypes.string,
};

export default SuccesStoryCPNS;
