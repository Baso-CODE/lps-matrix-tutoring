import "./ProgramCPNS.css";

const ProgramCPNS = () => {
  return (
    <div className="program-container">
      <div className="image-container" data-aos="flip-up">
        <img
          loading="lazy"
          src="/images/simak-ui/program-cpns.webp"
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          className="program-image"
        />
      </div>
      <h1 className="main-title-cpns">Program Les Privat CPNS</h1>
      <div className="program-section">
        <h2 className="section-title-cpns">
          1. Les Privat Offline (Guru Les Privat Datang ke Rumah Siswa)
        </h2>
        <p className="section-description">
          Layanan Les Privat CPNS Offline menjangkau seluruh wilayah di
          Jabodetabek, yakni Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi,
          BSD, dan sekitarnya. Sistemnya adalah les privat CPNS ke rumah, guru
          akan datang ke rumah siswa sesuai dengan jadwal yang sudah disepakati
          bersama. Lokasi belajar selain di rumah, juga bisa di asrama, kantor,
          apartemen ataupun lokasi lain yang kondusif untuk kegiatan belajar
          mengajar.
        </p>
      </div>
      <div className="program-section">
        <h2 className="section-title-cpns">
          2. Les Privat Online (Guru dan Siswa Belajar Bersama menggunakan
          Aplikasi Zoom atau Google Meet)
        </h2>
        <p className="section-description">
          Layanan Les Privat CPNS Online diperuntukan bagi siswa yang tidak
          berkenan melaksanakan privat secara offline maupun siswa yang berada
          di luar wilayah Jabodetabek. Aplikasi yang dapat digunakan dalam
          proses kegiatan belajar mengajar antara guru dengan siswa meliputi
          Zoom, Google Meet, Skype, WhatsApp atau aplikasi pendukung video call
          lainnya yang sudah disepakati bersama.
        </p>
      </div>
      <div className="program-section">
        <h2 className="section-title-cpns">Paket Sesi Les Privat</h2>
        <p className="section-description">
          LPS Matrix memiliki pilihan paket sesi belajar Les Privat persiapan
          Tes SKD CPNS sebagai berikut:
        </p>
        <ul className="package-list">
          <li>Paket 100 sesi</li>
          <li>Paket 150 sesi</li>
          <li>Paket 200 sesi</li>
        </ul>
        <p className="section-description">
          Sebelum siswa belajar, siswa les privat CPNS akan diminta untuk
          mengerjakan Tryout Online Asesmen untuk melihat sejauh mana kemampuan
          siswa saat ini. Tersedia juga Modul untuk Persiapan tes SKD CPNS.
        </p>
        <p className="section-description">
          Pemilihan paket sesi belajar bisa disesuaikan dengan kebutuhan siswa
          maupun dari rekomendasi Tim Akademik setelah melihat hasil Asesmen
          awal siswa.
        </p>
        <p className="section-description">
          Setiap siswa LPS Matrix setiap bulannya akan mendapatkan laporan
          progress perkembangan belajar siswa. Tersedia juga Tryout Online SKD
          CPNS yang frekuensinya disesuaikan dengan paket sesi yang diambil.
        </p>
      </div>
    </div>
  );
};

export default ProgramCPNS;
