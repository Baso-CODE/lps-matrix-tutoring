import "./TestimoniWa.css";

const TestimoniWa = () => {
  const testimoniwa = [
    { image: "/images/TESTIMONI/1.webp" },
    { image: "/images/TESTIMONI/2.webp" },
    { image: "/images/TESTIMONI/3.webp" },
    { image: "/images/TESTIMONI/4.webp" },
    { image: "/images/TESTIMONI/5.webp" },
    { image: "/images/TESTIMONI/6.webp" },
    { image: "/images/TESTIMONI/7.webp" },
    { image: "/images/TESTIMONI/8.webp" },
    { image: "/images/TESTIMONI/9.webp" },
  ];
  return (
    <section id="TESTIMONI">
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
        <img
          loading="eager"
          src="/images/testimoni-wa.webp"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        {/* Image Gallery */}
        <div className="success-story-gallery">
          {testimoniwa.map((item, index) => (
            <img
              loading="lazy"
              src={item.image}
              alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
              key={index}
              className="TESTIMONI-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniWa;
