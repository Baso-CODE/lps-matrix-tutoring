/* eslint-disable react/prop-types */

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { getTestimoniWa } from "../../api/testimoniWa/getTestimoniWa";
import "./TestimoniWaSlider.css";
import { useLocation } from "react-router-dom";

const TestimoniWaSlider = ({ title, description, cityProp }) => {
  const [dataTestimoniWa, setDataTestimoniWa] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTestimoniWa();
        setDataTestimoniWa(result.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

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
    [Autoplay({ delay: 2800, stopOnInteraction: false })]
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
          {dataTestimoniWa.map((image, index) => (
            <div className="embla__slide-tesimoni-ortu" key={index}>
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
// };

export default TestimoniWaSlider;
