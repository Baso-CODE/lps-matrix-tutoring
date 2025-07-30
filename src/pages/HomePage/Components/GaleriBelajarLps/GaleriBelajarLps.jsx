import "./GaleriBelajarLps.css";

const GaleriBelajarLps = () => {
  return (
    <div className="alumni-lps-container">
      <div className="alumni-lps-header">
        <h2>Gallery Belajar Siswa LPS</h2>
      </div>
      <p className="additional-description-about__us">
        Di LPS Education, kami percaya bahwa proses belajar yang interaktif dan
        didampingi oleh mentor berkualitas adalah kunci kesuksesan siswa dalam
        meraih impian akademisnya. Melalui galeri ini, kami memperlihatkan
        momen-momen berharga di mana siswa kami terlibat dalam pembelajaran yang
        penuh semangat dan bimbingan intensif dari para tutor terbaik. Dengan
        mentor yang terdiri dari mahasiswa dan alumni UI, ITB, UGM, STAN, STIS,
        serta kampus ternama lainnya, LPS berkomitmen untuk menjadi mitra
        belajar yang mendukung siswa mencapai PTN favorit mereka di seluruh
        Indonesia.
      </p>

      <img
        loading="lazy"
        src="/images/gallery-belajar.png"
        alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
      />
    </div>
  );
};

export default GaleriBelajarLps;
