import { useEffect, useState } from "react";
import "./HeadingUTBK.css";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";

const HeadingUTBK = () => {
  const [jumbotron, setJumbotron] = useState(false);

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
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <div className="isi-content-hero__sd_smp_sma">
          <h1 className="title-halaman-hero__sd_smp_sma">
            Les Privat Persiapan UTBK SNBT (ONLINE & OFFLINE)
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
              secara online.
            </p>
            <p className="child-paragraf-hero__sd_smp_sma">
              Program ini dirancang untuk meningkatkan keterampilan mengerjakan
              soal dan pemahaman materi esensial, didukung evaluasi berkala oleh{" "}
              <span className="color-d2b04c-description">Tim Akademik LPS</span>{" "}
              yang akan memberikan rekomendasi untuk mendukung kemajuan belajar
              siswa.
            </p>
            <p className="child-paragraf-hero__sd_smp_sma">
              Tujuan program ini adalah memastikan siswa dapat meraih hasil
              akademik terbaik dan lolos ke perguruan tinggi impian mereka
              melalui pendampingan yang fokus dan strategis.
            </p>
          </div>

          <button className="btn-learn-more__sd_smp_sma">
            Konsultasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadingUTBK;
