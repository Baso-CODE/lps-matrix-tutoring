import "./VideoKarantina.css";

const VideoKarantina = () => {
  return (
    <section className="video-section">
      <div className="video-header">
        <h2 className="video-title">
          Belajar Menjadi Lebih Seru Bersama LPS Education
        </h2>
        <p className="video-description">
          Saksikan bagaimana program <strong>Les Privat & Bimbel OSN</strong>{" "}
          dari membantu siswa di seluruh Indonesia meraih prestasi terbaik! Dua
          video berikut ini menampilkan suasana pembelajaran interaktif dan
          semangat belajar yang tinggi.
        </p>
      </div>

      <div className="video-grid">
        <div className="video-card">
          <iframe
            className="youtube-frame"
            src="https://www.youtube.com/embed/-VbHUqZlqco"
            title="Supercamp UTBK SNBT - Lokasi Depok"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"></iframe>
          <h3 className="video-subtitle">Supercamp UTBK SNBT – Depok</h3>
          <p className="video-text">
            Suasana belajar intensif di{" "}
            <strong>Supercamp UTBK SNBT Depok</strong>. Program ini dirancang
            untuk membantu siswa mempersiapkan diri menghadapi{" "}
            <strong>UTBK SNBT dan masuk PTN impian</strong> melalui pendalaman
            materi, tryout rutin, dan bimbingan dari mentor berpengalaman.
          </p>
        </div>

        <div className="video-card">
          <iframe
            className="youtube-frame"
            src="https://www.youtube.com/embed/hJ8F0h2PMXw"
            title="Supercamp UTBK SNBT - Lokasi Jogja"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"></iframe>
          <h3 className="video-subtitle">Supercamp UTBK SNBT – Jogja</h3>
          <p className="video-text">
            Dokumentasi kegiatan{" "}
            <strong>Supercamp UTBK SNBT di Yogyakarta</strong>, tempat siswa
            menjalani pembelajaran intensif dengan sistem asrama penuh dukungan
            mentor profesional. Fokus pada strategi lolos{" "}
            <strong>PTN favorit</strong> dengan pembelajaran yang menyenangkan
            dan terarah.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoKarantina;
