import "./VisiEndMisiLps.css";

const VisiEndMisiLps = () => {
  return (
    <div className="visi-misi-container">
      <h1 className="visi-misi-title">Visi dan Misi LPS</h1>
      <div className="card-container">
        <div className="card">
          <h2 className="card-title">
            <img
              loading="lazy"
              src="/images/visi-misi/VISI.webp"
              alt="Ilustrasi Visi LPS, Menjadi Lembaga Pendidikan Privat Terbaik di Indonesia"
            />
            Visi
          </h2>
          <p className="card-content">
            Menjadi lembaga pendidikan privat terbaik di Indonesia yang mencetak
            siswa berprestasi dan berkarakter unggul.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">
            <img
              loading="eager"
              src="/images/visi-misi/MISI.webp"
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
        <div className="card">
          <h2 className="card-title">
            <img
              loading="lazy"
              src="/images/visi-misi/FILOSOFI.webp"
              alt="Ilustrasi Filosofi LPS, Pendidikan Sebagai Investasi Terbaik untuk Masa Depan"
            />{" "}
            Filosofi
          </h2>
          <p className="card-content">
            Pendidikan adalah investasi terbaik yang membangun masa depan dan
            menginspirasi generasi penerus untuk terus berkembang.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">
            <img
              loading="lazy"
              src="/images/visi-misi/PROMISE.webp"
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
