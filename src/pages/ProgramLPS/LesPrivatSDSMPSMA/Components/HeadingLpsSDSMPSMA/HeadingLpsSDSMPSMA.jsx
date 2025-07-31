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

export default HeadingLpsSDSMPSMA;
