import "./FiturDanLayanan.css";

const FiturDanLayanan = () => {
  return (
    <div className="fitur-layanan-lps">
      {/* <h1 className="fitur-title">Fitur dan Layanan LPS</h1> */}

      {/* Les Privat Akademik */}
      <div className="fitur-item">
        <img
          loading="lazy"
          src="/images/fiturLayanan/AKADEMIK.webp" // ganti dengan path gambar Anda
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          className="fitur-image"
        />
        <div className="fitur-content">
          <h2 className="fitur-subtitle">Les Privat Akademik</h2>
          <p className="fitur-description">
            Program les privat akademik untuk membantu siswa dari berbagai
            jenjang pendidikan dalam memahami pelajaran dan mencapai hasil
            terbaik.
          </p>
          <ul className="fitur-list">
            <li>Les Privat SD</li>
            <li>Les Privat SMP</li>
            <li>Les Privat SMA</li>
            <li>Les Privat TKA(Tes Kemampuan Akademik)</li>
            <li>Les Privat Mahasiswa</li>
            <li>Les Privat Olimpiade(Nasional dan Internasional)</li>
            <li>Les Privat TOEFL/IELTS</li>
          </ul>
        </div>
      </div>

      {/* Les Privat Masuk PTN - Custom Layout with Image on the Right */}
      <div className="fitur-item image-right">
        <img
          loading="lazy"
          src="/images/fiturLayanan/MASUK_PTN.webp"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          className="fitur-image"
        />
        <div className="fitur-content">
          <h2 className="fitur-subtitle">Les Privat Masuk PTN</h2>
          <p className="fitur-description">
            Persiapan intensif bagi siswa yang ingin masuk perguruan tinggi
            negeri favorit, dengan bimbingan yang sesuai untuk berbagai jalur
            masuk PTN.
          </p>
          <ul className="fitur-list">
            <li>Les Privat UTBK SNBT</li>
            <li>Les Privat Simak UI</li>
            <li>Les Privat Simak KKI</li>
            <li>Les Privat Simak S2/S3/PPDS/Spesialis 2</li>
            <li>Les Privat IUP UGM</li>
            <li>Les Privat UTUL UGM</li>
            <li>Les Privat SM ITB</li>
            <li>Les Privat IUP ITB</li>
            <li>Les Privat SM ITS</li>
            <li>Les Privat IUP ITS</li>
            <li>Les Privat UM UNDIP</li>
            <li>Les Privat IUP Undip</li>
            <li>Les Privat UM Unair</li>
            <li>Les Privat IUP Unair</li>
            <li>Les Privat SMUP Unpad</li>
            <li>Les Privat SM-IPB</li>
            <li>Les Privat Penmaba UNJ</li>
            <li>Les Privat UM UNS</li>
            <li>Les Privat SEMA UPNVJ</li>
            <li>Les Privat UM UNHAS</li>
          </ul>
        </div>
      </div>

      {/* Les Privat Kedinasan */}
      <div className="fitur-item">
        <img
          loading="lazy"
          src="/images/fiturLayanan/KEDINASAN.webp"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          className="fitur-image"
        />
        <div className="fitur-content">
          <h2 className="fitur-subtitle">Les Privat Kedinasan</h2>
          <p className="fitur-description">
            Bimbingan khusus untuk menghadapi seleksi ketat masuk sekolah
            kedinasan dan persiapan tes kompetitif lainnya.
          </p>
          <ul className="fitur-list">
            <li>Les Privat CPNS</li>
            <li>Les Privat AKPOL</li>
            <li>Les Privat STAN/STIS</li>
            <li>Les Privat Sekolah Kedinasan lainnya</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FiturDanLayanan;
