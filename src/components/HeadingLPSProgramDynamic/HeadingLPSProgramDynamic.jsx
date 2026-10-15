import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./HeadingLPSProgramDynamic.css";

const HeadingLPSProgramDynamic = ({
  programName,
  defaultProgramName,
  imageUrlsDesktop,
  imageUrlsMobile,
  imageDimensions,
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
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const finalProgramName =
    programName || defaultProgramName || "Program Les Privat";

  const images = isMobile
    ? imageUrlsMobile?.length > 0
      ? imageUrlsMobile
      : ["/images/program/default-mobile.webp"]
    : imageUrlsDesktop?.length > 0
      ? imageUrlsDesktop
      : ["/images/program/default.webp"];

  const dimensions = isMobile
    ? imageDimensions?.mobile
    : imageDimensions?.desktop;

  const isMultipleImages = images.length > 1;

  const [emblaRef] = useEmblaCarousel(
    {
      loop: isMultipleImages,
      draggable: isMultipleImages,
    },
    isMultipleImages
      ? [
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]
      : [],
  );

  const altText = `Bimbel & Les Privat ${finalProgramName} bersama LPS Education${
    city ? " di " + city : ""
  }. Program belajar intensif oleh Guru Profesional dari PTN Favorit.`;

  return (
    <section className="container-halaman-program">
      <div className="content-hero-home-program">
        <div className="image-slider-container">
          <span className="program-image-glass-specular" aria-hidden="true" />

          <span className="program-image-glass-refraction" aria-hidden="true" />

          {isMultipleImages ? (
            <div className="embla program-image-slider" ref={emblaRef}>
              <div className="embla__container">
                {images.map((imgUrl, index) => (
                  <div className="embla__slide" key={`${imgUrl}-${index}`}>
                    <div className="program-image-inner-frame">
                      <img
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        className="program-hero-image"
                        src={imgUrl}
                        alt={`${altText} Gambar ${index + 1}`}
                        width={dimensions?.width}
                        height={dimensions?.height}
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="program-image-inner-frame">
              <img
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="program-hero-image"
                src={images[0]}
                alt={altText}
                width={dimensions?.width}
                height={dimensions?.height}
              />
            </div>
          )}
        </div>

        <div className="isi-content-hero-program">
          <div className="program-hero-eyebrow">
            <span className="program-hero-eyebrow-dot" />

            <span>Program LPS Education</span>
          </div>

          <h1 className="title-halaman-hero-program">
            {finalProgramName} (ONLINE & OFFLINE){" "}
            <span className="color-highlight">{city ? `di ${city}` : ""}</span>{" "}
            – LPS Education
          </h1>

          <div className="program-hero-description">
            {descriptionParagraphs?.length > 0 ? (
              descriptionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="child-paragraf-hero-program"
                  dangerouslySetInnerHTML={{
                    __html: paragraph,
                  }}
                />
              ))
            ) : (
              <>
                <p className="child-paragraf-hero-program">
                  <span className="color-highlight">
                    Program Intensif {finalProgramName}
                  </span>{" "}
                  merupakan suatu bentuk program belajar yang fleksibel dan
                  personal, tersedia secara
                  <span className="color-highlight">
                    {" "}
                    Privat Offline (guru datang ke rumah)
                  </span>{" "}
                  dan
                  <span className="color-highlight"> Privat Online</span>.
                </p>

                <p className="child-paragraf-hero-program">
                  Didukung oleh tutor profesional, program ini bertujuan untuk
                  mendampingi Anda mencapai target prestasi akademik dan
                  kelulusan di tingkat yang memuaskan.
                </p>
              </>
            )}
          </div>

          <button
            type="button"
            className="btn-learn-more-program"
            onClick={() => {
              if (finalUrl) {
                window.open(finalUrl, "_blank", "noopener,noreferrer");
              }
            }}>
            <span className="program-button-specular" aria-hidden="true" />

            <span>Konsultasi Sekarang</span>

            <span className="program-button-liquid-orb" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

HeadingLPSProgramDynamic.propTypes = {
  programName: PropTypes.string,
  defaultProgramName: PropTypes.string.isRequired,
  imageUrlsDesktop: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrlsMobile: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptionParagraphs: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string,
  imageDimensions: PropTypes.shape({
    desktop: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    mobile: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }),
};

export default HeadingLPSProgramDynamic;
