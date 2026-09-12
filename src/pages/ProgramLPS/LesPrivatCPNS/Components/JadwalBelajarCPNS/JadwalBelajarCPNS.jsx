import "./JadwalBelajarCPNS.css";

const jadwalBelajar = [
  "Jadwal belajar disesuaikan dengan permintaan siswa/orangtua",
  "Durasi Belajar per sesi pertemuan adalah 1,5 - 2 jam",
  "Terdapat Admin Khusus Penjadwalan untuk mengatur jadwal siswa",
  "Frekuensi belajar bisa disesuaikan dengan paket sesi yang diambil",
  "Siswa bisa belajar lebih dari satu sesi pertemuan sehari",
  "Sesi belajar bisa dari hari Senin – Minggu termasuk hari libur",
  "Pembatalan jadwal harap dikomunikasikan dengan admin khusus penjadwalan",
  "Jika siswa merasa tidak cocok dengan pengajar, akan diganti dengan pengajar yang lebih sesuai",
  "Siswa bisa request kepada pengajar untuk memberikan PR latihan soal – soal untuk dikerjakan mandiri",
];

const JadwalBelajarCPNS = () => {
  return (
    <section className="jadwal-container-cpns">
      <h2 className="jadwal-title-cpns">
        Jadwal Belajar Siswa Les Privat CPNS
      </h2>

      <ul className="jadwal-list-cpns">
        {jadwalBelajar.map((item, index) => (
          <li className="jadwal-item-cpns" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JadwalBelajarCPNS;
