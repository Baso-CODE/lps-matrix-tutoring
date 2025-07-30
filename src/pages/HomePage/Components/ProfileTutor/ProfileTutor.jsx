import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProfileTutor.css";
import { useEffect, useState } from "react";
import { getProfileTutor } from "../../../../api/profileTutor/profileTutor";

const ProfileTutor = () => {
  const [dataProfileTutor, setDataProfileTutor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProfileTutor();
      setDataProfileTutor(result.data);
    };
    fetchData();
  }, []);

  // Setting responsive breakpoints
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px">
        {dataProfileTutor.map((tutor, index) => (
          <div key={index} className="carousel-item">
            <img
              loading="lazy"
              src={tutor.link_image}
              alt={`Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit. ${
                index + 1
              }`}
              className="tutor-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProfileTutor;
