import "./TestimoniWaSiswa.css";
const TestimoniWaSiswa = () => {
  return (
    <div className="alumni-lps-container">
      <div className="alumni-lps-header">
        <h2>Testimoni</h2>
      </div>
      <p className="additional-description-about__us">
        Di <span className="color-d2b04c-description">LPS Matrix</span>,
        kepuasan dan keberhasilan siswa selalu menjadi prioritas kami.{" "}
        <span className="color-d2b04c-description">
          Melalui testimoni WhatsApp ini
        </span>
        , Anda dapat melihat pengalaman nyata dari siswa dan orang tua yang
        merasakan manfaat langsung dari metode belajar kami yang efektif dan
        bimbingan intensif dari tutor berkualitas. Didampingi oleh mahasiswa dan
        alum ni dari UI, ITB, UGM, STAN, STIS, dan PTN terkemuka lainnya, kami
        bangga menjadi bagian dari perjalanan akademis mereka dalam mencapai PTN
        favorit di seluruh Indonesia.
      </p>

      <img
        className="desktop-image-testimoni"
        src="/images/TESTIMONI.webp"
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
      />
      <img
        src="/images/TESTIMONI-HP.webp"
        className="mobile-image-testimoni"
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
      />
    </div>
  );
};

export default TestimoniWaSiswa;
