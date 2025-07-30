import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./HeadingLpsSDSMPSMA.css";
const HeadingLpsSDSMPSMA = () => {
  const [jumbotron, setJumbotron] = useState(null);
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;
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
  // const handleCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";
  //   handleCTAClickLogic(targetUrl, e);
  // };
  return (
    <div className="container-halaman__sd_smp_sma">
      <div className="content-hero-home__sd_smp_sma">
        <img
          loading="lazy"
          data-aos="zoom-out"
          className="rumah-adat-hero__sd_smp_sma"
          src={jumbotron?.link_image || "/images/program/SD,SMP,SMA.webp"}
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <div className="isi-content-hero__sd_smp_sma">
          <h1 className="title-halaman-hero__sd_smp_sma">
            Les Privat SD SMP SMA (ONLINE & OFFLINE)
          </h1>
          <div>
            <p className="child-paragraf-hero__sd_smp_sma">
              Program Super Intensif{" "}
              <span className="color-d2b04c-description">SD SMP SMA </span>
              merupakan suatu bentuk program belajar privat yang dilaksanakan di
              rumah siswa dan secara ONLINE. Program ini disusun secara
              sistematis dan didukung dengan tutor-tutor yang sangat
              berpengalaman dan berkompeten mengajar siswa SD SMP SMA.
            </p>
            <p className="child-paragraf-hero__sd_smp_sma">
              Program belajar difokuskan pada pendalaman konsep dasar materi dan
              peningkatan keterampilan penyelesaian mengerjakan soal, baik PR,
              ulangan maupun Ujian Skolah. Progress belajar akan dimonitoring
              dan dievaluasi oleh{" "}
              <span className="color-d2b04c-description">
                {" "}
                Tim Akademik LPS
              </span>
              .
            </p>
            <p className="child-paragraf-hero__sd_smp_sma">
              Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan
              progress belajar siswa. Target Program Super Intensif adalah
              mendampingi siswa mencapai prestasi Akademik yang memuaskan dan
              bisa diterima di SMP terbaiik.
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

export default HeadingLpsSDSMPSMA;
