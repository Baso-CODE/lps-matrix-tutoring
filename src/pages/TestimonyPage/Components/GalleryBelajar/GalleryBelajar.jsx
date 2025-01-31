const GalleryBelajar = () => {
  return (
    <section id="success-story">
      <div className="alumni-lps-container">
        <div className="alumni-lps-header">
          <h2>All Testimoni WA</h2>
        </div>
        <p className="additional-description-about__us">
          LPS Jakarta adalah lembaga les pivat spesialis masuk PTN Favorit yang
          dikelola oleh “Excellent Team”. Dengan tagline “Your Learning Partner
          for Success” kami berupaya menjadi partner terbaik membantu siswa
          masuk PTN Favorit. Tim Tutor Program Masuk PTN adalah mahasiswa &
          alumni dari UI, ITB, UGM, STAN, STIS dan PTN Terbaik lainnya. Fokus
          kami adalah menjadi mitra terbaik siswa dalam meraih PTN Favorit di
          Indonesia.
        </p>
        {/* Image Gallery */}
        {/* <div className="success-story-gallery">
      {successStories.map((item, index) => (
        <img
          src={item.image}
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          key={index}
          className="success-story-image"
        />
      ))}
    </div> */}
        <img
          src="/images/testimoni-wa.webp"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
      </div>
    </section>
  );
};

export default GalleryBelajar;
