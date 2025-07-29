import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./HeroLpsOSN.css";
const HeroLpsOSN = () => {
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;
  const [jumbotron, setJumbotron] = useState(null);

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const result = await getJumbotronProgram("osn");
        setJumbotron(result.data);
      } catch (error) {
        console.error("errot fetching:", error);
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
          data-aos="fade-out"
          className="rumah-adat-hero__mahasiswa"
          src={jumbotron?.link_image || "/images/program/OSN.webp"}
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <div className="isi-content-hero__sd_smp_sma">
          <h1 className="title-halaman-hero__sd_smp_sma">
            Les Privat OSN, ISO, IMO (ONLINE & OFFLINE)
          </h1>
          <div>
            <p className="child-paragraf-hero__sd_smp_sma">
              Program <strong>Les Privat OSN, ISO, IMO</strong> dari LPS
              dirancang khusus untuk siswa yang ingin meraih prestasi luar biasa
              di ajang Olimpiade Sains Nasional (OSN) serta kompetisi
              internasional seperti International Science Olympiad (ISO) dan
              International Mathematical Olympiad (IMO). Program ini tersedia
              dalam format{" "}
              <span className="color-d2b04c-description">online</span> dan{" "}
              <span className="color-d2b04c-description">offline</span>,
              memberikan fleksibilitas sesuai kebutuhan siswa.
            </p>
            <p className="child-paragraf-hero__sd_smp_sma">
              Dengan tutor yang berpengalaman memenangkan kompetisi Olimpiade di
              tingkat nasional maupun internasional, program ini memastikan
              pendalaman konsep dasar, penyelesaian soal-soal tingkat tinggi,
              dan bimbingan intensif. Progress belajar siswa dipantau secara
              berkala oleh
              <span className="color-d2b04c-description">
                {" "}
                Tim Akademik LPS{" "}
              </span>
              , yang selalu siap memberikan rekomendasi terbaik.
            </p>
            <p className="child-paragraf-hero__sd_smp_sma">
              Target utama kami adalah mendukung siswa dalam meraih medali
              bergengsi pada ajang Olimpiade Sains. Selain itu, program ini
              dirancang secara komprehensif untuk mempersiapkan siswa agar dapat
              diterima di sekolah impian maupun perguruan tinggi favorit. Fokus
              utama kami terletak pada penguasaan materi yang mendalam dan
              pencapaian prestasi akademik yang luar biasa. Bergabunglah dengan
              program <strong>Super Intensif OSN</strong> dan wujudkan potensi
              terbaik Anda di bidang akademik!
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

export default HeroLpsOSN;
