import { Link } from "react-router-dom";
// import { handleCTAClickLogic } from "../../../../helpers/HandleCtaClick";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./TestimoniWaSiswa.css";
const TestimoniWaSiswa = () => {
  const contactData = useAppSelector(selectContactCsData);

  // const handleCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";
  //   handleCTAClickLogic(targetUrl, e);
  // };

  return (
    <div className="container-testimoni-wa">
      <div className="alumni-lps-header">
        <h2>Testimonials</h2>
      </div>
      <p className="additional-description-about__us">
        Prioritas utama{" "}
        <span className="color-d2b04c-description">LPS Education</span>
        {""} adalah memastikan kepuasan dan keberhasilan setiap siswa. Untuk
        membuktikannya, {""}
        <span className="color-d2b04c-description">
          kami hadirkan testimoni-testimoni langsung via WhatsApp
        </span>
        . Di sini, Anda akan menemukan bukti nyata bagaimana metode belajar kami
        yang teruji efektif, didukung oleh bimbingan intensif dari tutor-tutor
        berkualitas, telah mengubah perjalanan akademis mereka. Bersama
        mahasiswa dan alumni terbaik dari UI, ITB, UGM, IPB, UNJ serta PTN
        unggulan lainnya, kami berdedikasi membimbing para siswa hingga berhasil
        masuk ke PTN impian mereka di seluruh penjuru Indonesia.
      </p>
      <Link to={contactData?.link_cta}>
        <img
          loading="lazy"
          className="desktop-image-testimoni"
          src="/images/TESTIMONI.webp"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <img
          loading="lazy"
          src="/images/TESTIMONI-HP.webp"
          className="mobile-image-testimoni"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
      </Link>
    </div>
  );
};

export default TestimoniWaSiswa;
