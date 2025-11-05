import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const HeroLpsPascaSarjana = ({ city: cityProp }) => {
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

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const result = await getJumbotronProgram("lesprivat-pascasarjana");
        setJumbotron(result.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchJumbotron();
  }, []);

  const altText = `Bimbel & Les Privat UTBK, SIMAK UI, UTUL UGM bersama LPS Education${
    city ? " di " + city : ""
  }. Les Privat Datang ke Rumah & Online dengan Guru Privat UI, ITB, UGM, dan Kedokteran PTN Favorit.`;

  // const handleCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";
  //   handleCTAClickLogic(targetUrl, e);
  // };

  return (
    <div className="program-simak-ui-container">
      {/* Image Section */}
      <img
        loading="lazy"
        data-aos="zoom-in-down"
        src={jumbotron?.link_image || "/images/program/PASCA-SARJANA.webp"} // Ganti dengan URL atau path gambar yang sesuai
        alt={altText}
        className="program-simak-ui-image"
      />
      {/* Title Section */}
      <h1 className="program-simak-ui-title">
        Super Intensif Privat Ujian Masuk Simak UI S2/S3 & Pascasarjana UGM ITB
        UNPAD UNAIR UNJ
        <span className="color-d2b04c-description">
          {city ? ` ${city}` : ""}
        </span>{" "}
        – LPS Education
      </h1>
      {/* Description Section */}
      <p className="program-simak-ui-description">
        Menghadapi ujian masuk Pascasarjana seperti SIMAK UI S2/S3 dan seleksi
        Pascasarjana universitas lainnya membutuhkan strategi belajar yang
        tepat, pemahaman materi yang mendalam, serta pendampingan belajar secara
        intensif.
      </p>
      <br />
      {/* Description Section */}
      <p className="program-simak-ui-description">
        <span className="color-d2b04c-description">LPS Education</span>
        memiliki Layanan Program Les Privat Persiapan Ujian Masuk Pascasarjana
        S2/S3 untuk berbagai Perguruan Tinggi di antaranya UI, UGM, ITB, Unpad,
        UNJ, Unair, dan lainnya. Kami hadir sebagai pendamping belajar Anda agar
        sukses meraih impian melanjutkan studi ke jenjang yang lebih tinggi.
      </p>
      <br />
      {/* Program List Section */}
      <h3 className="program-simak-ui-title-h3">
        Berikut ini Jenis Layanan Privat Intensif Persiapan Ujian Masuk
        Pascasarjana (S2/S3) yang tersedia:
      </h3>
      <ul className="program-simak-ui-list">
        <li>Les Privat Simak UI S2 (Magister)</li>
        <li>Les Privat Simak UI S3 (Doctor) </li>
        <li>Les Privat Simak UI Profesi</li>
        <li>Les Privat Simak UI Spesialis (PPDS)</li>
        <li>Les Privat Simak UI Spesialis 2 (PPDS)</li>
        <li>Les Privat Simak UI RPL (Ekstensi)</li>
        <li>Les Privat SMUP Unpad Pascasarjana</li>
        <li>Les Privat SM ITB Pascasarjana</li>
        <li>Les Privat UM UGM Pascasarjana</li>
        <li>Les Privat Penmaba UNJ Pascasarjana</li>
        <li>Les Privat UM Unair Pascasarjana</li>
      </ul>
      <br />
      <p className="program-simak-ui-description">
        Dan Les Privat Ujian Masuk S2/S3 di Perguruan Tinggi lainnya akan kami
        upayakan tersedia.
      </p>
      <br />
      {/* Les privat Matrix */}
      <h2 className="program-simak-ui-title-h2">
        Privat Intensif Ujian Seleksi Masuk Pascasarjana S2/S3
      </h2>
      <p className="additional-description">
        <span className="color-d2b04c-description">LPS Education</span> -
        Program Privat Intensif Persiapan Ujian Masuk Pascasarjana merupakan
        suatu bentuk program belajar dengan fokus persiapan Ujian Masuk
        Pascasarjana jenjang Magister (S2), Doctor (S3), Spesilalis (PPDS), dan
        Profesi. dengan sistem belajar Privat Offline (guru datang ke rumah) dan
        Privat Online. Program ini disusun secara sistematis dan didukung dengan
        tutor-tutor berpengalaman dan berkompeten membimbing peserta persiapan
        masuk S2/S3/Profesi.
      </p>
      <br />
      <p className="additional-description">
        Program belajar difokuskan pada pendalaman konsep dasar materi dan
        peningkatan keterampilan penyelesaian soal-soal Ujian Masuk Pascasarjana
        S2/S3, yaitu TPA dan Bahasa Inggris. Progress belajar akan dimonitoring
        oleh Tim Akademik {""}
        <span className="color-d2b04c-description">LPS Education.</span>
      </p>
      <br />
      <p className="additional-description">
        Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan progress
        belajar siswa. Target Program Intensif Privat Persiapan Ujian Masuk
        Pascasarjana adalah mengantarkan siswa Sukses Ujian Masuk S2/S3 sesuai
        jurusan yang diinginkan.
      </p>{" "}
      <br />
      <p className="additional-description">
        Dengan jadwal belajar yang fleksibel menyesuaikan dengan waktu luang
        Anda, preferensi tutor yang bisa disesuaikan, dan pilihan paket sesi
        yang bisa dipilih sesuai kebutuhan, LPS Education siap memberikan yang
        terbaik.
      </p>{" "}
      <button
        className="btn-learn-more__sd_smp_sma"
        onClick={() => window.open(finalUrl, "_blank", "noopener,noreferrer")}>
        Konsultasi Sekarang
      </button>
    </div>
  );
};
HeroLpsPascaSarjana.propTypes = {
  city: PropTypes.string,
};
export default HeroLpsPascaSarjana;
