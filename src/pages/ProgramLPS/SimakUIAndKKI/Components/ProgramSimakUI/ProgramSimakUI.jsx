import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./ProgramSimakUI.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProgramSimakUI = ({ city: cityProp }) => {
  const [jumbotron, setJumbotron] = useState(null);
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

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
        const result = await getJumbotronProgram("simak-ui");
        setJumbotron(result.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchJumbotron();
  }, []);

  // const handleCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";
  //   handleCTAClickLogic(targetUrl, e);
  // };

  return (
    <div className="program-simak-ui-container">
      {/* Image Section */}
      <img
        loading="lazy"
        src={jumbotron?.link_image || "/images/program/SIMAK-UI.webp"}
        alt={altText}
        className="program-simak-ui-image"
      />
      {/* Les privat Matrix */}
      <h2 className="program-simak-ui-title">
        Bimbingan Belajar Intensif Les Privat Simak UI dan KKI{" "}
        <span className="color-d2b04c-description">
          {city ? `di ${city}` : ""}
        </span>{" "}
        – LPS Education
      </h2>
      {/* Description 1 */}
      <p className="additional-description_simak-ui">
        Program{" "}
        <span className="color-d2b04c-description">
          Super Intensif Privat Simak UI
        </span>{" "}
        merupakan suatu bentuk program belajar fokus Intensif Persiapan Ujian
        Simak UI dengan sistem belajar{" "}
        <span className="color-d2b04c-description">Privat Offline</span> (guru
        datang ke rumah) dan{" "}
        <span className="color-d2b04c-description">Privat Online</span>. Program
        ini disusun secara sistematis dan didukung dengan guru les privat
        berpengalaman untuk program Seleksi Masuk Universitas Indonesia. Program
        belajar difokuskan pada pendalaman konsep dasar materi dan peningkatan
        keterampilan penyelesaian soal-soal Simak UI.
      </p>
      <br />

      {/* Description 2 */}
      <p className="additional-description_simak-ui">
        Progress belajar akan dimonitoring oleh Tim Akademik LPS Education. Kami
        akan memberikan rekomendasi yang dibutuhkan sesuai dengan progress
        belajar siswa. Target Program Super Intensif Simak UI adalah
        mengantarkan siswa Sukses Masuk UI sesuai jurusan yang diinginkan.
      </p>

      <p className="additional-description_simak-ui">
        Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan progress
        belajar siswa. Target Program Super Intensif Simak UI adalah
        mengantarkan siswa Sukses Masuk UI sesuai jurusan yang diinginkan.
      </p>
      <br />

      {/* Title Section */}
      <h2 className="program-simak-ui-title-h2">
        Program Les Privat Simak UI dan KKI
      </h2>

      {/* Description Section */}
      <p className="program-simak-ui-description">
        <span className="color-d2b04c-description">LPS Education</span> memiliki
        Layanan Intensif Les Privat Simak UI dan KKI yang ditujukan untuk siswa
        SMA dan alumni yang akan mengikuti Seleksi Masuk Universitas Indonesia
        untuk jenjang Sarjana Reguler, Vokasi (D3/D4), dan S1 Kelas
        Internasional UI (KKI). Selain jenjang S1 dan Vokasi, kami juga memiliki
        layanan Les Privat Simak UI untuk S2 dan S3.
      </p>
      <br />
      <h3 className="program-simak-ui-title-h3">
        Berikut Layanan Program Privat Khusus Persiapan SIMAK UI yang tersedia:
      </h3>
      {/* Program List Section */}
      <ul className="program-simak-ui-list">
        <li>Les Privat SIMAK UI S1 dan Vokasi</li>
        <li>Les Privat Simak UI S1 KKI (Kelas Khusus Internasional) </li>
        <li>Les Privat Simak UI S2 (Magister)</li>
        <li>Les Privat Simak UI Profesi</li>
        <li>Les Privat Simak UI S3 (Doctor)</li>
        <li>Les Privat Simak UI Spesialis (PPDS)</li>
        <li>Les Privat Simak UI Spesialis 2</li>
      </ul>

      <button
        className="btn-learn-more__sd_smp_sma"
        onClick={() => window.open(finalUrl, "_blank", "noopener,noreferrer")}>
        Konsultasi Sekarang
      </button>
    </div>
  );
};

ProgramSimakUI.propTypes = {
  city: PropTypes.string,
};

export default ProgramSimakUI;
