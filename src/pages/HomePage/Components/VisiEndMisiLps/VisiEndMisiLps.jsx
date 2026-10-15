import { useState } from "react";
import "./VisiEndMisiLps.css";

const VisiEndMisiLps = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      key: "visi",
      title: "Visi",
      image: "/images/visi-misi/vission.webp",
      alt: "Ilustrasi Visi LPS, Menjadi Lembaga Pendidikan Privat Terbaik di Indonesia",
      content:
        "Menjadi lembaga pendidikan privat terbaik di Indonesia yang mencetak siswa berprestasi dan berkarakter unggul.",
    },
    {
      key: "misi",
      title: "Misi",
      image: "/images/visi-misi/mission.webp",
      alt: "Ilustrasi Misi LPS, Memberikan Layanan Les Privat Berkualitas dengan Guru Terbaik",
      content:
        "Memberikan layanan les privat berkualitas dengan guru-guru terbaik dan metode pembelajaran yang inovatif untuk menciptakan siswa yang unggul dalam akademik maupun non-akademik.",
    },
    {
      key: "filosofi",
      title: "Filosofi",
      image: "/images/visi-misi/filosofi.webp",
      alt: "Ilustrasi Filosofi LPS, Pendidikan Sebagai Investasi Terbaik untuk Masa Depan",
      content:
        "Pendidikan adalah investasi terbaik yang membangun masa depan dan menginspirasi generasi penerus untuk terus berkembang.",
    },
    {
      key: "promise",
      title: "Promise",
      image: "/images/visi-misi/promise.webp",
      alt: "Ilustrasi Promise LPS, Komitmen untuk Memberikan Bimbingan Terbaik kepada Siswa",
      content:
        "Kami berkomitmen untuk memberikan bimbingan terbaik dengan pendekatan yang personal sehingga setiap siswa mencapai potensi maksimalnya.",
    },
  ];

  return (
    <section className="visi-misi-container">
      <div className="visi-misi-inner">
        <div className="visi-misi-lps-title-container">
          <h2 className="visi-misi-title">Visi dan Misi LPS Education</h2>

          <div className="visi-misi-logo-glass">
            <img
              src="/images/visi-misi-lps-logo-optimized.webp"
              alt="Visi Misi LPS Education Logo"
              loading="eager"
              width={640}
              height={640}
            />
          </div>
        </div>

        <div className="card-container">
          {cards.map((item) => (
            <article
              key={item.key}
              className={`card ${
                hoveredCard !== null && hoveredCard !== item.key
                  ? "blurred"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard(item.key)}
              onMouseLeave={() => setHoveredCard(null)}>
              <span className="card-specular" aria-hidden="true" />

              <div className="card-reflection" aria-hidden="true" />

              <h3 className="card-title">
                <span className="card-icon-glass">
                  <img
                    loading="lazy"
                    width={640}
                    height={640}
                    src={item.image}
                    alt={item.alt}
                  />
                </span>

                <span>{item.title}</span>
              </h3>

              <p className="card-content">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisiEndMisiLps;
