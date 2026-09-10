import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AlumniLpsNew.css";

const DUMMY_ALUMNI = [
  {
    id: 1,
    name: "Airyn",
    jurusan: "Biologi - Universitas Indonesia",
    link_image: "/images/alumni-lps/airyn.webp",
  },
  {
    id: 2,
    name: "Allya",
    jurusan: "PWK - Universitas Dipenogoro",
    link_image: "/images/alumni-lps/allya.webp",
  },
  {
    id: 3,
    name: "Alya",
    jurusan: "Farmasi - Universitas Gadjah Mada",
    link_image: "/images/alumni-lps/alya.webp",
  },
  {
    id: 4,
    name: "Amira",
    jurusan: "Farmasi - Universitas Indonesia",
    link_image: "/images/alumni-lps/amira.webp",
  },
  {
    id: 5,
    name: "Anisa",
    jurusan: "Kedokteran - Universitas Indonesia",
    link_image: "/images/alumni-lps/anisa.webp",
  },
  {
    id: 6,
    name: "Bintang",
    jurusan: "Teknik Mesin - Universitas Diponegoro",
    link_image: "/images/alumni-lps/bintang.webp",
  },
  {
    id: 7,
    name: "Davina",
    jurusan: "Ilmu Komputer - Universitas Padjajaran",
    link_image: "/images/alumni-lps/davina.webp",
  },
  {
    id: 8,
    name: "Farros",
    jurusan: "FRSD - Institut Teknologi Bandung",
    link_image: "/images/alumni-lps/farros.webp",
  },
  {
    id: 9,
    name: "Fauzan",
    jurusan: "Managemen - Universitas Diponegoro",
    link_image: "/images/alumni-lps/fauzan.webp",
  },
  {
    id: 10,
    name: "Hafiz",
    jurusan: "Hukum - Universitas Indonesia",
    link_image: "/images/alumni-lps/hafiz.webp",
  },
  {
    id: 11,
    name: "Kaylee",
    jurusan: "Ilmu Komputer - Universitas Indonesia",
    link_image: "/images/alumni-lps/kaylee.webp",
  },
  {
    id: 12,
    name: "Lina",
    jurusan: "Ekeonimi Internasional - Universitas Indonesia",
    link_image: "/images/alumni-lps/lina.webp",
  },
  {
    id: 13,
    name: "Nabila",
    jurusan: "Kedokteran - Universitas Hasanuddin",
    link_image: "/images/alumni-lps/nabila.webp",
  },
  {
    id: 14,
    name: "Nisrina",
    jurusan: "Farmasi - Universitas Indonesia",
    link_image: "/images/alumni-lps/nisrina.webp",
  },
  {
    id: 15,
    name: "Queene",
    jurusan: "IUP Computer - Universitas Gadjah Mada",
    link_image: "/images/alumni-lps/quene.webp",
  },
  {
    id: 16,
    name: "Serena",
    jurusan: "Hub Inter - Universitas Indonesia",
    link_image: "/images/alumni-lps/serena.webp",
  },
  {
    id: 17,
    name: "Syaugi",
    jurusan: "Kedokteran - Universitas Indonesia",
    link_image: "/images/alumni-lps/syaugi.webp",
  },
  {
    id: 18,
    name: "Valida",
    jurusan: "Akuntansi - Universitas Dipenogoro",
    link_image: "/images/alumni-lps/valida.webp",
  },
];

const AlumniLpsNew = ({ city: cityProp }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";

  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const totalPages = Math.ceil(DUMMY_ALUMNI.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentAlumni = DUMMY_ALUMNI.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const paginationInfo = {
    totalPages,
    prevPage: currentPage > 1 ? currentPage - 1 : null,
    nextPage: currentPage < totalPages ? currentPage + 1 : null,
  };

  const goToPage = (pageNumber) => {
    if (pageNumber && pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          type="button"
          onClick={() => goToPage(i)}
          className={`pagination-button ${currentPage === i ? "active" : ""}`}
          aria-label={`Halaman ${i}`}
          aria-current={currentPage === i ? "page" : undefined}>
          <span className="pagination-specular" aria-hidden="true" />
          <span className="pagination-number">{i}</span>
        </button>,
      );
    }

    return pageNumbers;
  };

  return (
    <section className="alumni-lps-container">
      <div className="alumni-lps-inner">
        <div className="alumni-lps-header">
          <h2>Ikuti Jejak Alumni LPS</h2>
        </div>

        <p className="description-alumni-lps">
          LPS Education adalah lembaga les privat spesialis masuk PTN Favorit
          yang dikelola oleh “Excellent Team”. Dengan tagline{" "}
          <span className="color-d2b04c-description">
            “Your Learning Partner for Success”
          </span>{" "}
          kami berupaya menjadi partner terbaik membantu siswa masuk PTN
          Favorit. Tim Tutor Program Masuk PTN adalah mahasiswa & alumni dari
          UI, ITB, UGM, Unpad, IPB, UNJ dan PTN Terbaik lainnya.{" "}
          <span className="color-d2b04c-description">
            Fokus kami adalah menjadi mitra terbaik siswa dalam meraih PTN
            Favorit di Indonesia
          </span>
          .
        </p>

        {currentAlumni.length > 0 ? (
          <>
            <div className="alumnilPS-images-grid">
              {currentAlumni.map((alumni) => {
                const altText = `Alumni ${alumni.name} jurusan ${
                  alumni.jurusan
                } yang berhasil bersama program Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM, TKA, CPNS, Pascasarjana, Mahasiswa, dan OSN${
                  city ? " di " + city : ""
                } bersama LPS Education. Dibimbing oleh Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;

                return (
                  <article className="alumni-card-glass" key={alumni.id}>
                    <span className="alumni-card-specular" aria-hidden="true" />

                    <div className="alumni-image-wrapper">
                      <img
                        loading="lazy"
                        src={alumni.link_image}
                        alt={altText}
                        className="alumni-single-image"
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="pagination-controls">
                <button
                  type="button"
                  onClick={() => goToPage(paginationInfo.prevPage)}
                  disabled={!paginationInfo.prevPage}
                  className="pagination-button pagination-arrow"
                  aria-label="Halaman sebelumnya">
                  <span className="pagination-specular" aria-hidden="true" />

                  <img src="/images/left.webp" alt="" aria-hidden="true" />
                </button>

                {renderPageNumbers()}

                <button
                  type="button"
                  onClick={() => goToPage(paginationInfo.nextPage)}
                  disabled={!paginationInfo.nextPage}
                  className="pagination-button pagination-arrow"
                  aria-label="Halaman berikutnya">
                  <span className="pagination-specular" aria-hidden="true" />

                  <img src="/images/right.webp" alt="" aria-hidden="true" />
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="no-data-message">
            Tidak ada data alumni yang ditemukan.
          </p>
        )}
      </div>
    </section>
  );
};

AlumniLpsNew.propTypes = {
  city: PropTypes.string,
};

export default AlumniLpsNew;
