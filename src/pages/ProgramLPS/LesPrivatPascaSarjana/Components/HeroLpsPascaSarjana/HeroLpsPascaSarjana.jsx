import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";

const HeroLpsPascaSarjana = () => {
  const [jumbotron, setJumbotron] = useState(null);
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

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
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        className="program-simak-ui-image"
      />
      {/* Title Section */}
      <h1 className="program-simak-ui-title">
        Super Intensif Simak UI S2 (ONLINE & OFFLINE)
      </h1>
      {/* Description Section */}
      <p className="program-simak-ui-description">
        <span className="color-d2b04c-description">LPS Education</span> membuka
        LPS Education membuka program Les Privat Simak UI S2 yang ditujukan
        untuk siswa yang akan mengikuti Seleksi Masuk Universitas Indonesia
        untuk Program Pasca Sajarna. Berikut merupakan Program Khusus Simak UI
      </p>
      {/* Program List Section */}
      <ul className="program-simak-ui-list">
        <li>Les Privat Simak UI S1 Paralel</li>
        <li>Les Privat Simak UI S1 KKI</li>
        <li>Les Privat Simak UI S2</li>
        <li>Les Privat Simak UI S3</li>
        <li>Les Privat Simak UI Profesi</li>
        <li>Les Privat Simak UI Spesialis</li>
        <li>Les Privat Simak UI Spesialis 2</li>
        <li>Les Privat Simak UI Ekstensi</li>
      </ul>
      {/* Les privat Matrix */}
      <h3 className="program-simak-ui-title-h3">
        Les Privat SIMAK UI Pasca Sarjana
      </h3>
      <p className="additional-description">
        Program
        <span className="color-d2b04c-description">
          Super Intensif Simak UI Pasca Sarjana{" "}
        </span>{" "}
        merupakan suatu bentuk program belajar privat yang dilaksanakan di rumah
        siswa. Program ini disusun secara sistematis dan didukung dengan
        tutor-tutor yang sangat berpengalaman untuk program Seleksi Masuk
        Universitas Indonesia.
      </p>
      <br />
      <p className="additional-description">
        Program belajar difokuskan pada pendalaman konsep dasar materi dan
        peningkatan keterampilan penyelesaian soal-soal Simak UI S2 yaitu TPA
        dan Bahasa Inggris. Progress belajar akan dimonitoring oleh Tim Akademik{" "}
        {""}
        <span className="color-d2b04c-description">LPS Education.</span>
      </p>
      <br />
      <p className="additional-description">
        Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan progress
        belajar siswa. Target Program Super Intensif Simak UI adalah
        mengantarkan siswa Sukses Masuk UI sesuai jurusan yang diinginkan. Kami
        siap memberikan yang terbaik!
      </p>{" "}
      <button
        className="btn-learn-more__sd_smp_sma"
        onClick={() => window.open(finalUrl, "_blank", "noopener,noreferrer")}>
        Konsultasi Sekarang
      </button>
    </div>
  );
};

export default HeroLpsPascaSarjana;
