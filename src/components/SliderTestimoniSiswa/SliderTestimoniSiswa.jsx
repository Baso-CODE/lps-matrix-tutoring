import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTestimoniSiswaRequest } from "../../api/testimoniSiswa/testimoniSiswaRequest";
import "./SliderTestimoniSiswa.css";

const SliderTestimoniSiswa = ({ city: cityProp }) => {
  const [data, setData] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const titleRef = useRef(null);
  const pathRef = useRef(null);

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
      const response = await getTestimoniSiswaRequest();
      setData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = titleRef.current;
    const svgPath = pathRef.current;
    if (!el || !svgPath) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          try {
            const len = svgPath.getTotalLength();
            svgPath.style.strokeDasharray = len;
            svgPath.style.strokeDashoffset = len;
            svgPath.style.transition =
              "stroke-dashoffset 900ms cubic-bezier(.2,.9,.3,1)";
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                svgPath.style.strokeDashoffset = "0";
              });
            });
          } catch {
            el.classList.add("animate-stroke-fallback");
          }
          obs.unobserve(el);
        }
      },
      { threshold: 0.25 },
    );

    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div className="testimoni_wa__section">
      <h2 className="testimoni_wa__title">
        Testimoni Siswa{" "}
        <span ref={titleRef} className="highlight__title">
          LPS Education
          <svg
            className="underline__svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            aria-hidden="true">
            <path
              ref={pathRef}
              d="M10,80 C150,100 350,40 490,70"
              stroke="#ff6500"
              strokeWidth="15"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h2>
      <p className="testimoni_wa__description">
        Berikut adalah beberapa siswa yang telah merasakan manfaat belajar
        bersama kami. Lihat cerita dan pengalaman mereka di bawah ini.
      </p>

      {isDesktop ? (
        <div className="testimoni_wa__grid">
          {data.map((item, idx) => {
            const altText = `Testimoni siswa ${item.nama_siswa || "LPS"} mengenai Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM bersama LPS Education${city ? " di " + city : ""}. Dibimbing oleh Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;
            return (
              <div key={idx} className="testimoni_wa__card">
                <img
                  src={item.link_image}
                  alt={altText}
                  className="testimoni_wa__image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x500?text=No+Image";
                  }}
                />
                <h4 className="testimoni_wa__nama">{item.nama_siswa}</h4>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {data.map((item, idx) => {
              const altText = `Testimoni siswa ${item.nama_siswa || "LPS"} mengenai Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM bersama LPS Education${city ? " di " + city : ""}. Dibimbing oleh Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;
              return (
                <div className="embla__slide" key={idx}>
                  <div className="testimoni_wa__card">
                    <img
                      src={item.link_image}
                      alt={altText}
                      className="testimoni_wa__image"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/400x500?text=No+Image";
                      }}
                    />
                    <h4 className="testimoni_wa__nama">{item.nama_siswa}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

SliderTestimoniSiswa.propTypes = {
  city: PropTypes.string,
};

export default SliderTestimoniSiswa;
