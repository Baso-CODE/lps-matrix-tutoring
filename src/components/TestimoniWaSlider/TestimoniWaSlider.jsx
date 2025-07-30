import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { getTestimoniWa } from "../../api/testimoniWa/getTestimoniWa";
import "./TestimoniWaSlider.css";

const TestimoniWaSlider = () => {
  const [dataTestimoniWa, setDataTestimoniWa] = useState([]);

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
      <h2>Mereka Sudah Membuktikan, Didampingi Sampai Berhasil</h2>
      <p className="centered__profiletutor">
        Lihatlah bagaimana siswa-siswi kami meraih impian mereka. Testimoni
        nyata ini adalah bukti komitmen kami dalam membimbing menuju PTN
        favorit!
      </p>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {dataTestimoniWa.map((image, index) => (
            <div className="embla__slide-tesimoni-ortu" key={index}>
              <img
                loading="lazy"
                src={image.link_image}
                alt={`Testimoni Orang Tua ${image.name}`}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimoniWaSlider;
