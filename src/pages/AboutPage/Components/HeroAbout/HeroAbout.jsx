import "./HeroAbout.css";

const HeroAbout = () => {
  return (
    <div className="about__us">
      <div className="about__us_header">
        <h1>Company Profile</h1>
      </div>
      <section className="about__us-content">
        <div className="about__us-image">
          <img
            loading="lazy"
            src="/images/about-us/hero-about.webp"
            alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          />
        </div>
      </section>
      <h1 className="sekilas__lps_jakarta">Sekilas LPS Education</h1>
      <p className="additional-description-about__us">
        LPS Education adalah lembaga les pivat spesialis masuk PTN Favorit yang
        dikelola oleh “Excellent Team”. Dengan tagline “Your Learning Partner
        for Success” kami berupaya menjadi partner terbaik membantu siswa masuk
        PTN Favorit. Tim Tutor Program Masuk PTN adalah mahasiswa & alumni dari
        UI, ITB, UGM, STAN, STIS dan PTN Terbaik lainnya. Fokus kami adalah
        menjadi mitra terbaik siswa dalam meraih PTN Favorit di Indonesia.
      </p>
      <p className="additional-description-about__us">
        Kami menyediakan program bimbingan yang intensif dan komprehensif,
        dirancang khusus untuk mempersiapkan siswa dalam menghadapi ujian masuk
        PTN. Kurikulum kami diperbarui secara berkala sesuai dengan perkembangan
        terbaru, memastikan siswa mendapatkan pembelajaran yang relevan dan
        efektif.
      </p>
      <p className="additional-description-about__us">
        Selain bimbingan akademik, kami juga fokus pada pengembangan karakter
        siswa, membekali mereka dengan kemampuan berpikir kritis dan
        keterampilan yang diperlukan untuk berhasil di lingkungan perguruan
        tinggi. Kami percaya bahwa keberhasilan tidak hanya diukur dari nilai,
        tetapi juga dari kesiapan siswa untuk menghadapi tantangan masa depan.
      </p>
    </div>
  );
};

export default HeroAbout;
