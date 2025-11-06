import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./HeadingLPSProgramDynamic.css";
import { useEffect, useState } from "react";

const HeadingLPSProgramDynamic = ({
  programName,
  defaultProgramName,
  imageUrlsDesktop,
  imageUrlsMobile,
  descriptionParagraphs,
  city,
}) => {
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

  const location = useLocation();
  const path = location.pathname;

  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      // Atur breakpoint di sini (misalnya 768px)
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const finalProgramName =
    programName || defaultProgramName || "Program Les Privat";

  const images = isMobile
    ? imageUrlsMobile && imageUrlsMobile.length > 0
      ? imageUrlsMobile
      : ["/images/program/default-mobile.webp"]
    : imageUrlsDesktop && imageUrlsDesktop.length > 0
    ? imageUrlsDesktop
    : ["/images/program/default.webp"];

  const isMultipleImages = images.length > 1;

  // Konfigurasi Slider
  const sliderSettings = {
    dots: false,
    infinite: isMultipleImages,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: isMultipleImages,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: isMultipleImages,
    draggable: isMultipleImages,
    touchMove: isMultipleImages,
    className: "program-image-slider",
  };

  const altText = `Bimbel & Les Privat ${finalProgramName} bersama LPS Education${
    city ? " di " + city : ""
  }. Program belajar intensif oleh Guru Profesional dari PTN Favorit.`;

  return (
    <div className="container-halaman-program">
      <div className="content-hero-home-program">
        <div className="image-slider-container" data-aos="zoom-out">
          {isMultipleImages ? (
            <Slider {...sliderSettings}>
              {images.map((imgUrl, index) => (
                <div key={index}>
                  <img
                    loading="lazy"
                    className="program-hero-image"
                    src={imgUrl}
                    alt={`${altText} Gambar ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              loading="lazy"
              className="program-hero-image"
              src={images[0]}
              alt={altText}
            />
          )}
        </div>

        <div className="isi-content-hero-program">
          <h1 className="title-halaman-hero-program">
            {finalProgramName} (ONLINE & OFFLINE){" "}
            <span className="color-highlight">{city ? `di ${city}` : ""}</span>{" "}
            – LPS Education
          </h1>
          <div>
            {/* Teks Deskripsi */}
            {descriptionParagraphs && descriptionParagraphs.length > 0 ? (
              descriptionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="child-paragraf-hero-program"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))
            ) : (
              <>
                <p className="child-paragraf-hero-program">
                  <span className="color-highlight">
                    Program Intensif {finalProgramName}
                  </span>
                  merupakan suatu bentuk program belajar yang fleksibel dan
                  personal, tersedia secara
                  <span className="color-highlight">
                    {" "}
                    Privat Offline (guru datang ke rumah)
                  </span>{" "}
                  dan
                  <span className="color-highlight"> Privat Online</span>.
                </p>
                <br />
                <p className="child-paragraf-hero-program">
                  Didukung oleh tutor profesional, program ini bertujuan untuk
                  mendampingi Anda mencapai target prestasi akademik dan
                  kelulusan di tingkat yang memuaskan.
                </p>
              </>
            )}
          </div>

          <button
            className="btn-learn-more-program"
            onClick={() =>
              window.open(finalUrl, "_blank", "noopener,noreferrer")
            }>
            Konsultasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

HeadingLPSProgramDynamic.propTypes = {
  programName: PropTypes.string,
  defaultProgramName: PropTypes.string.isRequired,
  imageUrlsDesktop: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrlsMobile: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptionParagraphs: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
};

export default HeadingLPSProgramDynamic;
