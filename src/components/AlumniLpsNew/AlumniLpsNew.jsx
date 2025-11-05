import { useEffect, useState } from "react";
import "./AlumniLpsNew.css";
import { getAllAlumniLps } from "../../api/alumniLPS/getAllAlumniLPS"; // Pastikan path benar
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AlumniLpsNew = ({ city: cityProp }) => {
  const [alumniLps, setDataAlumniLps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({}); // Untuk menyimpan totalPages, nextPage, etc.
  const [loading, setLoading] = useState(true); // State loading
  const [error, setError] = useState(null); // State error
  const itemsPerPage = 6;

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const fetchDataAlumniLps = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getAllAlumniLps(page, itemsPerPage);

      if (result.status === 200) {
        setDataAlumniLps(result.data.alumniLps);
        setPaginationInfo(result.data.pagination);
      } else {
        // Tangani kasus ketika result.status bukan 200, misal 404 (No Alumni LPS found)
        setDataAlumniLps([]);
        setPaginationInfo({});
        setError(result.message || "Failed to fetch alumni data.");
      }
    } catch (err) {
      console.error("Error fetching alumni LPS data:", err);
      setError("Failed to load alumni data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAlumniLps(currentPage);
  }, [currentPage]); // Re-fetch data setiap kali currentPage berubah

  // Fungsi untuk mengubah halaman
  const goToPage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= paginationInfo.totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Jika Anda ingin menampilkan tombol nomor halaman
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= paginationInfo.totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`pagination-button ${currentPage === i ? "active" : ""}`}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="alumni-lps-container">
      <div className="alumni-lps-header">
        <h2>Ikuti jejak Alumni LPS</h2>
      </div>
      <p className="additional-description-about__us">
        LPS Education adalah lembaga les privat spesialis masuk PTN Favorit yang
        dikelola oleh “Excellent Team”. Dengan tagline{" "}
        <span className="color-d2b04c-description">
          “Your Learning Partner for Success”
        </span>{" "}
        kami berupaya menjadi partner terbaik membantu siswa masuk PTN Favorit.
        Tim Tutor Program Masuk PTN adalah mahasiswa & alumni dari UI, ITB, UGM,
        Unpad, IPB, UNJ dan PTN Terbaik lainnya.{" "}
        <span className="color-d2b04c-description">
          Fokus kami adalah menjadi mitra terbaik siswa dalam meraih PTN Favorit
          di Indonesia
        </span>
        .
      </p>

      {loading && <p className="loading-message">Memuat data alumni...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && alumniLps.length > 0 ? (
        <>
          <div className="alumnilPS-images-grid">
            {alumniLps.map((alumni) => {
              const altText = `Alumni ${alumni.name} jurusan ${
                alumni.jurusan
              } yang berhasil bersama program Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM, TKA, CPNS, Pascasarjana, Mahasiswa, dan OSN${
                city ? " di " + city : ""
              } bersama LPS Education. Dibimbing oleh Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;

              return (
                <img
                  key={alumni.id}
                  loading="lazy"
                  src={alumni.link_image}
                  alt={altText}
                  className="alumni-single-image"
                />
              );
            })}
          </div>

          {/* Pagination Controls */}
          {paginationInfo.totalPages > 1 && ( // Tampilkan pagination jika ada lebih dari 1 halaman
            <div className="pagination-controls">
              <button
                onClick={() => goToPage(paginationInfo.prevPage)}
                disabled={!paginationInfo.prevPage}
                className="pagination-button">
                <img src="/images/left.webp" alt="forward button" />
              </button>
              {renderPageNumbers()}
              <button
                onClick={() => goToPage(paginationInfo.nextPage)}
                disabled={!paginationInfo.nextPage}
                className="pagination-button">
                <img src="/images/right.webp" alt="next button" />
              </button>
            </div>
          )}
        </>
      ) : (
        !loading &&
        !error && (
          <p className="no-data-message">
            Tidak ada data alumni yang ditemukan.
          </p>
        )
      )}
    </div>
  );
};
AlumniLpsNew.propTypes = {
  city: PropTypes.string,
};

export default AlumniLpsNew;
