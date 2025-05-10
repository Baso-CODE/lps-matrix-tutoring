import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProfileTutor.css";

const ProfileTutor = () => {
  const tutors = [
    { image: "/images/TUTOR/1.webp" },
    { image: "/images/TUTOR/2.webp" },
    { image: "/images/TUTOR/3.webp" },
    { image: "/images/TUTOR/4.webp" },
    { image: "/images/TUTOR/5.webp" },
    { image: "/images/TUTOR/6.webp" },
    { image: "/images/TUTOR/7.webp" },
    { image: "/images/TUTOR/8.webp" },
    { image: "/images/TUTOR/9.webp" },
    { image: "/images/TUTOR/10.webp" },
    { image: "/images/TUTOR/11.webp" },
    { image: "/images/TUTOR/12.webp" },
    { image: "/images/TUTOR/13.webp" },
    { image: "/images/TUTOR/14.webp" },
    { image: "/images/TUTOR/15.webp" },
    { image: "/images/TUTOR/16.webp" },
    { image: "/images/TUTOR/17.webp" },
    { image: "/images/TUTOR/18.webp" },
  ];

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
        Tim pengajar LPS terdiri dari para profesional berpengalaman, termasuk
        dosen, asisten dosen, guru, serta mahasiswa unggulan dan alumni dari
        universitas ternama seperti{" "}
        <span className="color-d2b04c-description">
          UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN, dan institusi pendidikan
          terbaik lainnya.
        </span>
        Setiap tutor telah melalui proses seleksi yang ketat, pelatihan, dan
        diarahkan untuk mengajar sesuai bidang spesialisasi masing-masing.
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
        {tutors.map((tutor, index) => (
          <div key={index} className="carousel-item">
            <img
              loading="lazy"
              src={tutor.image}
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
