import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./HeadingUTBK.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const HeadingUTBK = ({ city: cityProp }) => {
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;
  const [jumbotron, setJumbotron] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const altText = `Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM bersama LPS Education${
    city ? " di " + city : ""
  }. Les Privat Datang ke Rumah & Online dengan Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const result = await getJumbotronProgram("utbk");
        setJumbotron(result.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchJumbotron();
  }, []);

  return (
    <div className="container-halaman__sd_smp_sma">
      <div className="content-hero-home__sd_smp_sma">
        <img
          loading="lazy"
          data-aos="zoom-in-up"
          className="rumah-adat-hero__sd_smp_sma"
          src={jumbotron.link_image || "/images/program/UTBK.webp"}
          alt={altText}
        />
        <div className="isi-content-hero__sd_smp_sma">
          <h1 className="title-halaman-hero__sd_smp_sma">
            Les Privat Persiapan UTBK SNBT (ONLINE & OFFLINE){" "}
            {city ? `di ${city}` : ""} – LPS Education
          </h1>
          <div>
            <p className="child-paragraf-hero__sd_smp_sma">
              Program{" "}
              <span className="color-d2b04c-description">
                Super Intensif UTBK SNBT
              </span>
              menawarkan pembelajaran privat yang berfokus pada pemahaman
              mendalam konsep dasar dan latihan intensif untuk kesiapan UTBK.
              Dengan bimbingan tutor berpengalaman, kami hadir di rumah atau
              secara online. Program ini dirancang untuk meningkatkan
              keterampilan mengerjakan soal dan pemahaman materi esensial,
              didukung evaluasi berkala oleh{" "}
              <span className="color-d2b04c-description">
                Tim Akademik LPS Education
              </span>{" "}
              yang akan memberikan rekomendasi untuk mendukung kemajuan belajar
              siswa.
            </p>
            <br />
            <p className="child-paragraf-hero__sd_smp_sma">
              Tujuan program ini adalah memastikan siswa dapat meraih hasil
              terbaik dan lolos ke perguruan tinggi impian mereka melalui
              pendampingan yang fokus dan strategis.
            </p>
          </div>

          <button
            className="btn-learn-more__sd_smp_sma"
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

HeadingUTBK.propTypes = {
  city: PropTypes.string,
};
export default HeadingUTBK;
