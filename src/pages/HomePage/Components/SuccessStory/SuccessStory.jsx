import { Link } from "react-router-dom";
import "./SuccessStory.css";

const SuccessStory = () => {
  const successStories = [
    { image: "/images/success-story/testimoni-1.webp" },
    { image: "/images/success-story/testimoni-2.webp" },
    { image: "/images/success-story/testimoni-3.webp" },
    { image: "/images/success-story/testimoni-4.webp" },
    { image: "/images/success-story/testimoni-5.webp" },
    { image: "/images/success-story/testimoni-6.webp" },
    { image: "/images/success-story/testimoni-7.webp" },
    { image: "/images/success-story/testimoni-8.webp" },
  ];
  return (
    <div className="container-succes-story-home">
      <div className="success-story-header">
        <div className="success-story-title-container">
          <h2 className="success-story-title">Success Story</h2>
          <p className="success-story-description">
            Temukan kisah inspiratif para alumni{" "}
            <span className="color-d2b04c-description">LPS Matrix</span> yang
            telah mencapai impian mereka di kampus-kampus ternama. Setiap
            pengalaman mengajarkan kita bagaimana belajar dengan tekun dan
            mencapai tujuan akademis dengan{" "}
            <span className="color-d2b04c-description">percaya diri!</span>
          </p>
        </div>
        <Link
          to="/testimoni-lps#success-story"
          className="success-story-button">
          More
        </Link>
      </div>
      {/* Image Gallery */}
      <div className="success-story-gallery">
        {successStories.map((item, index) => (
          <img
            loading="lazy"
            src={item.image}
            alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
            key={index}
            className="success-story-image"
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
