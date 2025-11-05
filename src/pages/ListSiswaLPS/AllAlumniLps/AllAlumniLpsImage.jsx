import { useLocation } from "react-router-dom";
import "./AllAlumniLpsImage.css";
import PropTypes from "prop-types";

const AllAlumniLpsImage = ({ city: cityProp }) => {
  const location = useLocation();
  const path = location.pathname;

  // Tentukan city
  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const dataAlumni = [
    {
      image: "/images/alumni-lps/all-alumni-lps-education-1.webp",
      id: 1,
    },
    {
      image: "/images/alumni-lps/all-alumni-lps-education-2.webp",
      id: 2,
    },
    {
      image: "/images/alumni-lps/all-alumni-lps-education-3.webp",
      id: 3,
    },
    {
      image: "/images/alumni-lps/all-alumni-lps-education-4.webp",
      id: 4,
    },
  ];

  return (
    <section className="alumni-image-section">
      <div className="alumni-image-container">
        <div className="alumni-image-header">
          <h2 className="alumni-image-title">Galeri Alumni LPS Education</h2>{" "}
          <p className="alumni-image-subtitle">
            Lihatlah bukti nyata keberhasilan siswa-siswi kami yang telah meraih
            impian mereka di PTN favorit.
          </p>
        </div>
        {/* Image Gallery Grid */}
        <div className="alumni-image-grid">
          {dataAlumni.map((alumni) => {
            const altText = `Alumni LPS Education yang berhasil bersama program Bimbel & Les Privat ${
              city ? "di " + city + " " : ""
            }untuk UTBK, SIMAK UI, CPNS, TKA, Pascasarjana, Mahasiswa, hingga OSN. Dibimbing oleh Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;

            return (
              <div key={alumni.id} className="alumni-image-card">
                <img
                  loading="lazy"
                  src={alumni.image}
                  alt={altText}
                  className="alumni-single-image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

AllAlumniLpsImage.propTypes = {
  city: PropTypes.string,
};

export default AllAlumniLpsImage;
