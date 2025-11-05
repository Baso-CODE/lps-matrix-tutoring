import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import "./SliderTestimoniSiswa.css";
import { getTestimoniSiswaRequest } from "../../api/testimoniSiswa/testimoniSiswaRequest";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SliderTestimoniSiswa = ({ city: cityProp }) => {
  const [data, setData] = useState([]);
  const titleRef = useRef(null);
  const pathRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  // Tentukan city
  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTestimoniSiswaRequest();
      setData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // cek ukuran layar pertama kali
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize(); // run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let obs;
    // safety: wait until refs exist
    const el = titleRef.current;
    const path = pathRef.current;
    if (!el || !path) return;

    obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          try {
            const len = path.getTotalLength();

            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
            path.style.transition =
              "stroke-dashoffset 900ms cubic-bezier(.2,.9,.3,1)";

            // Trigger animation next frame
            requestAnimationFrame(() => {
              // two frames to ensure styles applied
              requestAnimationFrame(() => {
                path.style.strokeDashoffset = "0";
              });
            });
          } catch {
            el.classList.add("animate-stroke-fallback");
          }
          // only run once
          obs.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);

    return () => {
      if (obs && el) obs.unobserve(el);
    };
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
      </h2>{" "}
      <p className="testimoni_wa__description">
        Berikut adalah beberapa siswa yang telah merasakan manfaat belajar
        bersama kami. Lihat cerita dan pengalaman mereka di bawah ini.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Grid]}
        spaceBetween={20}
        slidesPerView={1}
        grid={{ rows: 1, fill: "row" }}
        navigation={!isDesktop ? { hideOnClick: true } : false}
        pagination={isDesktop ? { clickable: true } : false}
        breakpoints={{
          768: { slidesPerView: 2, grid: { rows: 1, fill: "row" } }, // tablet
          1024: { slidesPerView: 2, grid: { rows: 2, fill: "row" } }, // desktop 2x2
        }}>
        {data.map((item, idx) => {
          const altText = `Testimoni siswa ${
            item.nama_siswa || "LPS"
          } mengenai Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM bersama LPS Education${
            city ? " di " + city : ""
          }. Dibimbing oleh Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;

          return (
            <SwiperSlide key={idx}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

SliderTestimoniSiswa.propTypes = {
  city: PropTypes.string,
};

export default SliderTestimoniSiswa;
