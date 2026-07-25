import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProfileTutorDummy } from "../../../../api/profileTutor/getProfileTutorDummy";
import "./ProfileTutor.css";

const ProfileTutor = ({ city: cityProp }) => {
  const [dataProfileTutor, setDataProfileTutor] = useState([]);

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProfileTutorDummy();
      setDataProfileTutor(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="profile-tutor-lps">
      <h1 className="profile-title">Profil Tutor LPS</h1>
      <p className="centered__profiletutor">
        Tim pengajar LPS Education terdiri dari para profesional berpengalaman,
        termasuk dosen, asisten dosen, guru, mahasiswa dan alumni dari UI, ITB,
        UGM, Unpad, IPB, dan Perguruan Tinggi lainnya yang telah melalui proses
        seleksi ketat, dilatih, dan diarahkan untuk mengajar sesuai dengan
        bidang spesialisasi yang dikuasai.
      </p>

      <div className="embla carousel-container" ref={emblaRef}>
        <div className="embla__container">
          {dataProfileTutor.map((tutor, index) => {
            const altText = `Tutor ${tutor.name || "LPS Education"} untuk program Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM, TKA, CPNS, Pascasarjana, Mahasiswa, dan OSN${city ? " di " + city : ""}. Guru Privat dari UI, ITB, UGM, dan Kedokteran PTN Favorit.`;
            return (
              <div
                key={index}
                className="embla__slide carousel-item-padding-40-px">
                <div className="carousel-item">
                  <div className="tutor-card">
                    <div className="tutor-image-wrapper">
                      <img
                        loading="lazy"
                        src={tutor.link_image}
                        alt={altText}
                        className="tutor-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ProfileTutor.propTypes = {
  city: PropTypes.string,
};

export default ProfileTutor;
