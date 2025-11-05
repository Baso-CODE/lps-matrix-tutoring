import { PiHandSwipeRightBold } from "react-icons/pi";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { getSuccesStoryCPNS } from "../../../../../api/succesStoryCpns/getSuccesStoryCPNS";
import "./SuccesStoryCPNS.css";
import { useLocation } from "react-router-dom";

const SuccesStoryCPNS = ({ city: cityProp }) => {
  const [succesStories, setSuccessStories] = useState([]);

  const location = useLocation();
  const path = location.pathname;

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
        <div className="success-story-cpns-title-container">
          {/* <h2 className="success-story-cpns-title">Success Story</h2> */}
        </div>

        {/* Bagian Deskripsi dan Swiper */}
        <div className="success-story-cpns-content">
          {/* Bagian Kiri: Title dan Deskripsi */}
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
              {/* <FaChevronLeft className="text-white text-3xl cursor-pointer" /> */}
              <span className="success-story-cpns-swipe-text">
                Swipe Card to see more
              </span>
              <PiHandSwipeRightBold className="success-story-cpns-swipe-icon" />
            </div>
          </div>

          {/* Bagian Kanan: Swiper Cards */}
          <div className="success-story-cpns-swiper-container">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="success-story-cpns-swiper">
              {succesStories.map((story, index) => {
                const altText = `Testimoni siswa ${
                  story.name || "LPS"
                } mengenai Bimbel & Les Privat CPNS bersama LPS Education${
                  city ? " di " + city : ""
                }. Program persiapan Tes CPNS dengan bimbingan tutor berpengalaman dan strategi lolos seleksi ASN.`;

                return (
                  <SwiperSlide
                    key={index}
                    className="success-story-cpns-swiper-slide">
                    <img
                      loading="lazy"
                      src={story.link_image}
                      alt={altText}
                      className="success-story-cpns-swiper-image"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
