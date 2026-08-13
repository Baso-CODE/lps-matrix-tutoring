/* eslint-disable react/prop-types */

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useLocation } from "react-router-dom";
import "./TestimoniWaSlider.css";

// Dummy data untuk testimoni WhatsApp
const DUMMY_TESTIMONI_WA = [
  {
    id: 1,
    link_image: "/images/testimoni-wa/fika-s-haru.png",
  },
  {
    id: 2,
    link_image: "/images/testimoni-wa/najmina.png",
  },
  {
    id: 3,
    link_image: "/images/testimoni-wa/najwa.png",
  },
  {
    id: 4,
    link_image: "/images/testimoni-wa/rana-p-sandy.png",
  },
  {
    id: 5,
    link_image: "/images/testimoni-wa/sekar-mahasa.png",
  },
  {
    id: 6,
    link_image: "/images/testimoni-wa/sisca-s-carolina.png",
  },
  {
    id: 7,
    link_image: "/images/testimoni-wa/vita-s-irna.png",
  },
  {
    id: 8,
    link_image: "/images/testimoni-wa/zaidan.png",
  },
];

const TestimoniWaSlider = ({ title, description, cityProp }) => {
  const location = useLocation();
  const path = location.pathname;

  // Tentukan city
  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const altText = `Testimoni Siswa ${
    city ? " di " + city : ""
  } bersama LPS Education. Program Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM, TKA, CPNS, Pascasarjana, Mahasiswa, dan OSN.`;

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2, slidesToShow: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3, slidesToShow: 3 },
      },
      slidesToScroll: 1,
      slidesToShow: 1,
    },
    [Autoplay({ delay: 2800, stopOnInteraction: false })],
  );

  return (
    <div className="testimonial-slider-container">
      <h2>
        {title ||
          `Mereka Sudah Membuktikan, Didampingi Sampai Berhasil
        `}
      </h2>
      <p className="centered__profiletutor">
        {description ||
          `Lihatlah bagaimana siswa-siswi kami meraih impian mereka. Testimoni
        nyata ini adalah bukti komitmen kami dalam membimbing menuju PTN
        favorit!`}
      </p>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {DUMMY_TESTIMONI_WA.map((image, index) => (
            <div className="embla__slide-tesimoni-ortu" key={image.id || index}>
              <img
                loading="lazy"
                src={image.link_image}
                alt={altText}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// TestimoniWaSlider.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   cityProp: PropTypes.string,
// };

export default TestimoniWaSlider;
