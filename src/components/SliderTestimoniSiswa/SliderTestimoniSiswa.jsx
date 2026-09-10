import { ChevronDown, ChevronUp } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTestimoniSiswaRequest } from "../../api/testimoniSiswa/testimoniSiswaRequest";
import "./SliderTestimoniSiswa.css";

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 6;

const SliderTestimoniSiswa = ({ city: cityProp }) => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);

  const titleRef = useRef(null);
  const pathRef = useRef(null);

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";

  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTestimoniSiswaRequest();
        setData(response?.data || []);
      } catch (error) {
        console.error("Gagal mengambil data testimoni siswa:", error);
        setData([]);
      }
    };

    fetchData();
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
      {
        threshold: 0.25,
      },
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
    };
  }, []);

  const visibleData = data.slice(0, visibleCount);

  const hasMore = visibleCount < data.length;
  const hasExpanded = visibleCount > INITIAL_ITEMS;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, data.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_ITEMS);
  };

  return (
    <section className="testimoni_wa__section">
      <div className="testimoni_wa__inner">
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

        <div className="testimoni_wa__grid">
          {visibleData.map((item, idx) => {
            const altText = `Testimoni siswa ${
              item.nama_siswa || "LPS"
            } mengenai Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM bersama LPS Education${
              city ? " di " + city : ""
            }. Dibimbing oleh Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;

            return (
              <div
                key={item.id || item.link_image || idx}
                className="testimoni_wa__grid-item">
                <article className="testimoni_wa__card">
                  <span
                    className="testimoni_wa__card-specular"
                    aria-hidden="true"
                  />

                  <div className="testimoni_wa__image-wrapper">
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
                  </div>

                  {item.nama_siswa && (
                    <h4 className="testimoni_wa__nama">{item.nama_siswa}</h4>
                  )}
                </article>
              </div>
            );
          })}
        </div>

        {data.length > INITIAL_ITEMS && (
          <div className="testimoni_wa__load-more">
            {hasMore ? (
              <button
                type="button"
                className="testimoni_wa__more-button"
                onClick={handleShowMore}>
                <span
                  className="testimoni_wa__button-specular"
                  aria-hidden="true"
                />

                <span className="testimoni_wa__button-text">
                  Lihat Success Story Lainnya
                </span>

                <span className="testimoni_wa__button-icon">
                  <ChevronDown size={19} strokeWidth={2.2} />
                </span>
              </button>
            ) : (
              hasExpanded && (
                <button
                  type="button"
                  className="testimoni_wa__more-button"
                  onClick={handleShowLess}>
                  <span
                    className="testimoni_wa__button-specular"
                    aria-hidden="true"
                  />

                  <span className="testimoni_wa__button-text">
                    Tampilkan Lebih Sedikit
                  </span>

                  <span className="testimoni_wa__button-icon">
                    <ChevronUp size={19} strokeWidth={2.2} />
                  </span>
                </button>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

SliderTestimoniSiswa.propTypes = {
  city: PropTypes.string,
};

export default SliderTestimoniSiswa;
