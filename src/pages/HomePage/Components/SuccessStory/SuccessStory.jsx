import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./SuccessStory.css";

const SuccessStory = ({ city: cityProp }) => {
  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }
  const successStories = [
    { image: "/images/success-story/testimoni-1.webp" },
    { image: "/images/success-story/testimoni-2.webp" },
    { image: "/images/success-story/testimoni-3.webp" },
    { image: "/images/success-story/testimoni-4.webp" },
    { image: "/images/success-story/testimoni-5.webp" },
    { image: "/images/success-story/testimoni-6.webp" },
    { image: "/images/success-story/testimoni-7.webp" },
    { image: "/images/success-story/testimoni-8.webp" },
    { image: "/images/success-story/testimoni-9.webp" },
    { image: "/images/success-story/testimoni-10.webp" },
    { image: "/images/success-story/testimoni-11.webp" },
    { image: "/images/success-story/testimoni-12.webp" },
  ];
  return (
    <div className="container-succes-story-home">
      <div className="success-story-header">
        <div className="success-story-title-container">
          <h2 className="success-story-title">Success Story</h2>
        </div>
        <Link
          to="/testimoni-lps#success-story"
          className="success-story-button">
          More
        </Link>
      </div>
      <p className="success-story-description">
        Temukan kisah inspiratif para alumni{" "}
        <span className="color-d2b04c-description">LPS Education</span> yang
        telah mencapai impian mereka di kampus-kampus ternama. Setiap pengalaman
        mengajarkan kita bagaimana belajar dengan tekun dan mencapai tujuan
        akademis dengan{" "}
        <span className="color-d2b04c-description">percaya diri!</span>
      </p>
      {/* Image Gallery */}
      <div className="success-story-gallery">
        {successStories.map((item, index) => {
          const altText = `Testimoni ${
            index + 1
          } Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM bersama LPS Education${
            city ? " di " + city : ""
          }. Guru Privat UI, ITB, UGM, Kedokteran PTN Favorit.`;

          return (
            <img
              loading="lazy"
              src={item.image}
              alt={altText}
              key={index}
              className="success-story-image"
            />
          );
        })}
      </div>
    </div>
  );
};

SuccessStory.propTypes = {
  city: PropTypes.string,
};

export default SuccessStory;
