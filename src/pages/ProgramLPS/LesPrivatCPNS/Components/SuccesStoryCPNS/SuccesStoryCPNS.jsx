import { PiHandSwipeRightBold } from "react-icons/pi";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import { getSuccesStoryCPNS } from "../../../../../api/succesStoryCpns/getSuccesStoryCPNS";
import "./SuccesStoryCPNS.css";

const SuccesStoryCPNS = () => {
  const [succesStories, setSuccessStories] = useState([]);

  useEffect(() => {
    async function fetchSuccessStories() {
      try {
        const result = await getSuccesStoryCPNS();
        setSuccessStories(result.data);
      } catch (error) {
        console.log("Failed to fetch success stories", error);
      }
    }
    fetchSuccessStories();
  }, []);

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
            <h3 className="success-story-cpns-subtitle">
              Success Stories CPNS & Kedinasan
            </h3>
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
              {succesStories.map((story, index) => (
                <SwiperSlide
                  key={index}
                  className="success-story-cpns-swiper-slide">
                  <img
                    loading="lazy"
                    src={story.link_image}
                    alt={`Succes story Siswa OSN Edumatirix Indonesia atas nama ${story.participantName}`}
                    className="success-story-cpns-swiper-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccesStoryCPNS;
