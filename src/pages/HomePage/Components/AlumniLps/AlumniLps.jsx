import "./AlumniLps.css";
const AlumniLps = () => {
  return (
    <div className="alumni-lps-container">
      <div className="alumni-lps-header">
        <h2>Ikuti jejak Alumni LPS</h2>
      </div>
      <p className="additional-description-about__us">
        LPS Jakarta adalah lembaga les pivat spesialis masuk PTN Favorit yang
        dikelola oleh “Excellent Team”. Dengan tagline{" "}
        <span className="color-d2b04c-description">
          “Your Learning Partner for Success”
        </span>{" "}
        kami berupaya menjadi partner terbaik membantu siswa masuk PTN Favorit.
        Tim Tutor Program Masuk PTN adalah mahasiswa & alumni dari UI, ITB, UGM,
        STAN, STIS dan PTN Terbaik lainnya.{" "}
        <span className="color-d2b04c-description">
          Fokus kami adalah menjadi mitra terbaik siswa dalam meraih PTN Favorit
          di Indonesia
        </span>
        .
      </p>
      <img
        loading="lazy"
        src="/images/alumni-dek.webp"
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
      />
      <img
        loading="lazy"
        src="/images/alumni-dek2.webp"
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
      />
      <img
        loading="lazy"
        src="/images/alumni-dek3.webp"
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
      />
    </div>
  );
};

export default AlumniLps;
