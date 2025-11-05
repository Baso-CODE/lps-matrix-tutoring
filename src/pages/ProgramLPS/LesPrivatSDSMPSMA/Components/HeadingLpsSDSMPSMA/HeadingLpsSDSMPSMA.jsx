import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./HeadingLpsSDSMPSMA.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const HeadingLpsSDSMPSMA = ({ city: cityProp }) => {
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
        const result = await getJumbotronProgram("lesprivat-sd-smp-sma");
        setJumbotron(result.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchJumbotron();
  }, []);

  const altText = `Les Privat SD, SMP, dan SMA bersama LPS Education${
    city ? " di " + city : ""
  }. Program belajar semua mata pelajaran dengan Guru Privat Berpengalaman dari UI, ITB, UGM, dan PTN Favorit untuk mendukung prestasi akademik siswa.`;

  return (
    <div className="container-halaman__sd_smp_sma">
      <div className="content-hero-home__sd_smp_sma">
        <img
          loading="lazy"
          data-aos="zoom-out"
          className="rumah-adat-hero__sd_smp_sma"
          src={jumbotron?.link_image || "/images/program/SD,SMP,SMA.webp"}
          alt={altText}
        />
        <div className="isi-content-hero__sd_smp_sma">
          <h1 className="title-halaman-hero__sd_smp_sma">
            Les Privat SD SMP SMA (ONLINE & OFFLINE){" "}
            <span className="color-d2b04c-description">
              {city ? `di ${city}` : ""}
            </span>{" "}
            – LPS Education
          </h1>
          <div>
            <p className="child-paragraf-hero__sd_smp_sma">
              <span className="color-d2b04c-description">
                Program Intensif Privat SD SMP SMA
              </span>{" "}
              merupakan suatu bentuk program belajar fokus Akademik Sekolah SD
              SMP SMA dan persiapan Ujian dengan sistem belajar{" "}
              <span className="color-d2b04c-description">
                Privat Offline (guru datang ke rumah)
              </span>{" "}
              dan{" "}
              <span className="color-d2b04c-description">Privat Online</span>.
              Program ini disusun secara sistematis dan didukung dengan guru les
              berpengalaman dan berkompeten mengajar siswa SD SMP SMA.
            </p>
            <br />
            <p className="child-paragraf-hero__sd_smp_sma">
              Program belajar difokuskan pada pendalaman konsep dasar materi dan
              peningkatan keterampilan penyelesaian mengerjakan soal, baik{" "}
              <span className="color-d2b04c-description">
                PR, Ulangan, Ujian Tengah Semester dan Akhir Semester, Ujian
                Kenaikan Kelas, Ujian Sekolah
              </span>
              , maupun untuk persiapan{" "}
              <span className="color-d2b04c-description">
                TKA (Tes Kemampuan Akademik)
              </span>
              . Selain itu, kami juga memiliki Program Privat Persiapan Ujian
              Masuk SD SMP SMA Sekolah Unggulan. Progress belajar siswa akan
              dimonitoring dan dievaluasi oleh Tim Akademik LPS Education.
            </p>
            <br />
            <p className="child-paragraf-hero__sd_smp_sma">
              Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan
              progress belajar siswa. Target Program{" "}
              <span className="color-d2b04c-description">
                Intensif Privat SD SMP SMA
              </span>
              adalah mendampingi siswa mencapai prestasi Akademik yang memuaskan
              dan bisa diterima di sekolah impian.
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
HeadingLpsSDSMPSMA.propTypes = {
  city: PropTypes.string,
};

export default HeadingLpsSDSMPSMA;
