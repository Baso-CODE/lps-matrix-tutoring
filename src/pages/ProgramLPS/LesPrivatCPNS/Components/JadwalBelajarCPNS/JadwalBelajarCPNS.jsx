import "./JadwalBelajarCPNS.css";

const JadwalBelajarCPNS = () => {
  return (
    <div className="jadwal-container">
      <h1 className="jadwal-title">Jadwal Belajar Siswa Les Privat CPNS</h1>
      <ul className="jadwal-list">
        <li>Jadwal belajar disesuaikan dengan permintaan siswa/orangtua</li>
        <li>Durasi Belajar per sesi pertemuan adalah 1,5 - 2 jam</li>
        <li>Terdapat Admin Khusus Penjadwalan untuk mengatur jadwal siswa</li>
        <li>
          Frekuensi belajar bisa disesuaikan dengan paket sesi yang diambil
        </li>
        <li>Siswa bisa belajar lebih dari satu sesi pertemuan sehari</li>
        <li>Sesi belajar bisa dari hari Senin – Minggu termasuk hari libur</li>
        <li>
          Pembatalan jadwal harap dikomunikasikan dengan admin khusus
          penjadwalan
        </li>
        <li>
          Jika siswa merasa tidak cocok dengan pengajar, akan diganti dengan
          pengajar yang lebih sesuai
        </li>
        <li>
          Siswa bisa request kepada pengajar untuk memberikan PR latihan soal –
          soal untuk dikerjakan mandiri
        </li>
      </ul>
    </div>
  );
};

export default JadwalBelajarCPNS;
