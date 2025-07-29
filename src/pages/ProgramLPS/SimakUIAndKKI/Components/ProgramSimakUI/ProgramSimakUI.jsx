import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./ProgramSimakUI.css";

const ProgramSimakUI = () => {
  const [jumbotron, setJumbotron] = useState(null);
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

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
        src={jumbotron?.link_image || "/images/program/SIMAK-UI.webp"} // Ganti dengan URL atau path gambar yang sesuai
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        className="program-simak-ui-image"
      />
      {/* Les privat Matrix */}
      <h1 className="program-simak-ui-title">Bimbel & Les Privat SIMAK UI</h1>
      <p className="additional-description_simak-ui">
        Program
        <span className="color-d2b04c-description"> Super Intensif</span> Simak
        UI S1 merupakan suatu bentuk program belajar privat guru datang ke rumah
        dan les privat SIMAK UI online. Program ini disusun secara sistematis
        dan didukung dengan tutor-tutor yang sangat berpengalaman untuk program
        Seleksi Masuk Universitas Indonesia. Program belajar difokuskan pada
        pendalaman konsep dasar materi dan peningkatan keterampilan penyelesaian
        soal-soal Simak UI. Progress belajar akan dimonitoring oleh Tim Akademik{" "}
        <span className="color-d2b04c-description">LPS Education.</span>
      </p>

      <p className="additional-description_simak-ui">
        Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan progress
        belajar siswa. Target Program Super Intensif Simak UI adalah
        mengantarkan siswa Sukses Masuk UI sesuai jurusan yang diinginkan.
      </p>

      {/* Title Section */}
      <h2 className="program-simak-ui-title-h3">Program SIMAK UI</h2>

      {/* Description Section */}
      <p className="program-simak-ui-description">
        <span className="color-d2b04c-description">LPS Education</span> membuka
        program Les Privat Simak UI S1 yang ditujukan untuk siswa yang akan
        mengikuti Seleksi Masuk Universitas Indonesia untuk Program S1 dan
        Vokasi dan S1 Kelas Internasional (KKI UI). Berikut merupakan Program
        Khusus Simak UI 2025 Les Privat SIMAK UI S1 dan Vokasi
      </p>

      {/* Program List Section */}
      <ul className="program-simak-ui-list">
        <li>Les Privat SIMAK UI S1 dan Vokasi</li>
        <li>Les Privat Simak UI S1 KKI</li>
        <li>Les Privat Simak UI S2</li>
        <li>Les Privat Simak UI Profesi</li>
        <li>Les Privat Simak UI S3</li>
        <li>Les Privat Simak UI Spesialis</li>
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

export default ProgramSimakUI;
