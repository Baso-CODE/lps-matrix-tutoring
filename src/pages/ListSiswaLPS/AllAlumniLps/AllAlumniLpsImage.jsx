import "./AllAlumniLpsImage.css";

const AllAlumniLpsImage = () => {
  const dataAlumni = [
    {
      image: "/images/alumni-lps/all-alumni-lps-education-1.webp",
      id: 1,
    },
    {
      image: "/images/alumni-lps/all-alumni-lps-education-2.webp",
      id: 2,
    },
    {
      image: "/images/alumni-lps/all-alumni-lps-education-3.webp",
      id: 3,
    },
    {
      image: "/images/alumni-lps/all-alumni-lps-education-4.webp",
      id: 4,
    },
    // Anda bisa menambahkan lebih banyak gambar di sini
    // {
    //   image: "/images/alumni-lps/all-alumni-lps-education-5.webp",
    //   id: 5,
    // },
    // {
    //   image: "/images/alumni-lps/all-alumni-lps-education-6.webp",
    //   id: 6,
    // },
  ];

  return (
    <section className="alumni-image-section">
      {" "}
      {/* Menggunakan section sebagai kontainer utama */}
      <div className="alumni-image-container">
        {" "}
        {/* Kontainer untuk konten */}
        <div className="alumni-image-header">
          <h2 className="alumni-image-title">Galeri Alumni LPS Education</h2>{" "}
          {/* Judul yang lebih deskriptif */}
          <p className="alumni-image-subtitle">
            Lihatlah bukti nyata keberhasilan siswa-siswi kami yang telah meraih
            impian mereka di PTN favorit.
          </p>
        </div>
        {/* Image Gallery Grid */}
        <div className="alumni-image-grid">
          {dataAlumni.map((alumni) => (
            <div key={alumni.id} className="alumni-image-card">
              {" "}
              {/* Wrapper untuk setiap gambar */}
              <img
                loading="lazy"
                src={alumni.image}
                alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
                className="alumni-single-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllAlumniLpsImage;
