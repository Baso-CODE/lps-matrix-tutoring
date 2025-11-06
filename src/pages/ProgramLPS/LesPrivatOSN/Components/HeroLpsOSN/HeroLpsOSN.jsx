import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./HeroLpsOSN.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const HeroLpsOSN = ({ city: cityProp }) => {
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;
  const [jumbotron, setJumbotron] = useState(null);

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
        const result = await getJumbotronProgram("osn");
        setJumbotron(result.data);
      } catch (error) {
        console.error("errot fetching:", error);
      }
    };
    fetchJumbotron();
  }, []);

  const altText = `Les Privat OSN (Olimpiade Sains Nasional) bersama LPS Education${
    city ? " di " + city : ""
  }. Program bimbingan intensif Matematika, Fisika, Kimia, Biologi, dan bidang OSN lainnya dengan Tutor Berpengalaman dari UI, ITB, UGM, dan PTN Favorit.`;

  return (
    <div className="container-halaman__sd_smp_sma">
      <div className="content-hero-home__sd_smp_sma">
        <img
          loading="lazy"
          data-aos="fade-out"
          className="rumah-adat-hero__mahasiswa"
          src={jumbotron?.link_image || "/images/program/OSN.webp"}
          alt={altText}
        />
        <div className="isi-content-hero__sd_smp_sma">
          <h1 className="title-halaman-hero__sd_smp_sma">
            Les Privat OSN, ISO, IMO, SEAMO (ONLINE & OFFLINE){" "}
            {city ? `di ${city}` : ""} – LPS Education
          </h1>
          <div>
            <p className="child-paragraf-hero__sd_smp_sma">
              <span className="color-d2b04c-description">LPS Education</span> -
              Program Les Privat OSN, ISO, IMO dirancang khusus untuk siswa yang
              ingin meraih prestasi luar biasa di ajang Olimpiade Sains Nasional
              (OSN) serta kompetisi internasional seperti International Science
              Olympiad (ISO), International Mathematical Olympiad (IMO), dan
              SEAMO (South East Asia Mathematical Olympiad). Program ini
              tersedia dalam format{" "}
              <span className="color-d2b04c-description">Privat Offline</span>{" "}
              dan{" "}
              <span className="color-d2b04c-description">Privat Online</span>,
              memberikan fleksibilitas sesuai kebutuhan siswa.
            </p>
            <br />
            <p className="child-paragraf-hero__sd_smp_sma">
              Dengan guru les privat yang berpengalaman mendampingi siswa
              persiapan Olimpiade di tingkat nasional maupun internasional,
              program ini memastikan pendalaman konsep dasar, penyelesaian
              soal-soal tingkat tinggi, dan bimbingan intensif. Progress belajar
              siswa dipantau secara berkala oleh Tim Akademik , yang selalu siap
              memberikan rekomendasi terbaik.
            </p>
            <br />
            <p className="child-paragraf-hero__sd_smp_sma">
              Target utama kami adalah mendukung siswa dalam meraih medali
              bergengsi pada ajang Olimpiade. Fokus utama kami terletak pada
              penguasaan materi yang mendalam dan pencapaian prestasi akademik
              yang luar biasa. Bergabunglah dengan{" "}
              <span className="color-d2b04c-description">
                Program Super Intensif Privat OSN dan Olimpiade Internasional
              </span>{" "}
              serta wujudkan potensi terbaik Anda di bidang akademik!
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
HeroLpsOSN.propTypes = {
  city: PropTypes.string,
};

export default HeroLpsOSN;
