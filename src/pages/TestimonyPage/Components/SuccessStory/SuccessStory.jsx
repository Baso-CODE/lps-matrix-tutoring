import "./SuccessStory.css";

const SuccessStory = () => {
  const successStories = [
    { image: "/images/success-story/testimoni-1.webp" },
    { image: "/images/success-story/testimoni-2.webp" },
    { image: "/images/success-story/testimoni-3.webp" },
    { image: "/images/success-story/testimoni-4.webp" },
    { image: "/images/success-story/testimoni-5.webp" },
    { image: "/images/success-story/testimoni-6.webp" },
    { image: "/images/success-story/testimoni-7.webp" },
    { image: "/images/success-story/testimoni-8.webp" },
    { image: "/images/success-story/testimoni-9.webp" },
    { image: "/images/success-story/testimoni-10.webp" },
    { image: "/images/success-story/testimoni-11.webp" },
    { image: "/images/success-story/testimoni-12.webp" },
    { image: "/images/success-story/testimoni-13.webp" },
    { image: "/images/success-story/testimoni-14.webp" },
    { image: "/images/success-story/testimoni-15.webp" },
    { image: "/images/success-story/testimoni-16.webp" },
    { image: "/images/success-story/testimoni-17.webp" },
    { image: "/images/success-story/testimoni-18.webp" },
    { image: "/images/success-story/testimoni-19.webp" },
    { image: "/images/success-story/testimoni-20.webp" },
    { image: "/images/success-story/testimoni-21.webp" },
    { image: "/images/success-story/testimoni-22.webp" },
    { image: "/images/success-story/testimoni-23.webp" },
    { image: "/images/success-story/testimoni-24.webp" },
    { image: "/images/success-story/testimoni-25.webp" },
    { image: "/images/success-story/testimoni-26.webp" },
    { image: "/images/success-story/testimoni-27.webp" },
    { image: "/images/success-story/testimoni-28.webp" },
    { image: "/images/success-story/testimoni-29.webp" },
    { image: "/images/success-story/testimoni-30.webp" },
    { image: "/images/success-story/testimoni-31.webp" },
    { image: "/images/success-story/testimoni-32.webp" },
  ];
  return (
    <section id="success-story">
      <div className="alumni-lps-container">
        <div className="alumni-lps-header">
          <h2>All Succes Story</h2>
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
        <div className="success-story-gallery">
          {successStories.map((item, index) => (
            <img
              src={item.image}
              alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
              key={index}
              className="success-story-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
