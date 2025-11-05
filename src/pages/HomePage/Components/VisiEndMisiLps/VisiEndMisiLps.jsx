import { useState } from "react";
import "./VisiEndMisiLps.css";

const VisiEndMisiLps = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="visi-misi-container">
      <div className="visi-misi-lps-title-container">
        <h2 className="visi-misi-title">Visi dan Misi LPS Education</h2>
        <img
          src="/images/visi-misi-lps-logo.webp"
          alt="Visi Misi LPS Education Logo"
          loading="eager"
        />
      </div>

      <div className="card-container">
        <div
          className={`card ${
            hoveredCard !== null && hoveredCard !== "visi" ? "blurred" : ""
          }`}
          onMouseEnter={() => setHoveredCard("visi")}
          onMouseLeave={() => setHoveredCard(null)}>
          <h2 className="card-title">
            <img
              loading="lazy"
              src="/images/visi-misi/vission.gif"
              alt="Ilustrasi Visi LPS, Menjadi Lembaga Pendidikan Privat Terbaik di Indonesia"
            />
            Visi
          </h2>
          <p className="card-content">
            Menjadi lembaga pendidikan privat terbaik di Indonesia yang mencetak
            siswa berprestasi dan berkarakter unggul.
          </p>
        </div>

        {/* Kartu Misi */}
        <div
          className={`card ${
            hoveredCard !== null && hoveredCard !== "misi" ? "blurred" : ""
          }`}
          onMouseEnter={() => setHoveredCard("misi")}
          onMouseLeave={() => setHoveredCard(null)}>
          <h2 className="card-title">
            <img
              loading="eager"
              src="/images/visi-misi/mission.gif"
              alt="Ilustrasi Misi LPS, Memberikan Layanan Les Privat Berkualitas dengan Guru Terbaik"
            />
            Misi
          </h2>
          <p className="card-content">
            Memberikan layanan les privat berkualitas dengan guru-guru terbaik
            dan metode pembelajaran yang inovatif untuk menciptakan siswa yang
            unggul dalam akademik maupun non-akademik.
          </p>
        </div>

        {/* Kartu Filosofi */}
        <div
          className={`card ${
            hoveredCard !== null && hoveredCard !== "filosofi" ? "blurred" : ""
          }`}
          onMouseEnter={() => setHoveredCard("filosofi")}
          onMouseLeave={() => setHoveredCard(null)}>
          <h2 className="card-title">
            <img
              loading="lazy"
              src="/images/visi-misi/filosofi.gif"
              alt="Ilustrasi Filosofi LPS, Pendidikan Sebagai Investasi Terbaik untuk Masa Depan"
            />{" "}
            Filosofi
          </h2>
          <p className="card-content">
            Pendidikan adalah investasi terbaik yang membangun masa depan dan
            menginspirasi generasi penerus untuk terus berkembang.
          </p>
        </div>

        {/* Kartu Promise */}
        <div
          className={`card ${
            hoveredCard !== null && hoveredCard !== "promise" ? "blurred" : ""
          }`}
          onMouseEnter={() => setHoveredCard("promise")}
          onMouseLeave={() => setHoveredCard(null)}>
          <h2 className="card-title">
            <img
              loading="lazy"
              src="/images/visi-misi/promise.gif"
              alt="Ilustrasi Promise LPS, Komitmen untuk Memberikan Bimbingan Terbaik kepada Siswa"
            />
            Promise
          </h2>
          <p className="card-content">
            Kami berkomitmen untuk memberikan bimbingan terbaik dengan
            pendekatan yang personal sehingga setiap siswa mencapai potensi
            maksimalnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisiEndMisiLps;
