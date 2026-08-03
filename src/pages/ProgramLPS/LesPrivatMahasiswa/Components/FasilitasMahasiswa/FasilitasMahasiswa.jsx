import "./FasilitasMahasiswa.css";

const FasilitasMahasiswa = () => {
  return (
    <div className="fasilitas-mahasiswa-container">
      {/* Card Container */}
      <div className="fasilitas-mahasiswa-cards">
        {/* Card 1: Fasilitas */}
        <div className="fasilitas-mahasiswa-card">
          <img
            src="/images/icon/fasilitas/fasilitas.webp"
            alt="Icon Fasilitas"
            className="fasilitas-mahasiswa-icon"
            loading="lazy"
          />
          <h2 className="fasilitas-mahasiswa-title">Fasilitas</h2>
          <ul className="fasilitas-mahasiswa-list">
            <li>Mapping kebutuhan belajar siswa</li>
            <li>Kegiatan belajar privat terprogram & intensif</li>
            <li>Pengajar yang berkualitas dari UI & PTN Terbaik</li>
            <li>Bimbingan dan arahan strategi belajar efektif</li>
            <li>Progress report & evaluasi belajar secara berkala</li>
          </ul>
        </div>

        {/* Card 2: Target Belajar */}
        <div className="fasilitas-mahasiswa-card">
          <img
            loading="lazy"
            src="/images/icon/fasilitas/target.webp"
            alt="Icon Target Belajar"
            className="fasilitas-mahasiswa-icon"
          />
          <h2 className="fasilitas-mahasiswa-title">Target Belajar</h2>
          <ul className="fasilitas-mahasiswa-list">
            <li>
              Implementasi model belajar efektif berdasarkan mapping kebutuhan
              akademik mahasiswa
            </li>
            <li>
              Penguasaan materi perkuliahan secara mendalam dan terstruktur
            </li>
            <li>
              Peningkatan kemampuan analisis, berpikir kritis, dan pemecahan
              masalah sesuai bidang studi
            </li>
            <li>
              Persiapan optimal menghadapi ujian tengah dan akhir semester
            </li>
            <li>
              Mahasiswa mampu mencapai IPK yang ditargetkan atau lebih tinggi
            </li>
          </ul>
        </div>

        {/* Card 3: Scheduling */}
        <div className="fasilitas-mahasiswa-card">
          <img
            loading="lazy"
            src="/images/icon/fasilitas/schedulling.webp"
            alt="Icon Scheduling"
            className="fasilitas-mahasiswa-icon"
          />
          <h2 className="fasilitas-mahasiswa-title">Scheduling</h2>
          <ul className="fasilitas-mahasiswa-list">
            <li>Penjadwalan dihandle langsung oleh admin Scheduling.</li>
            <li>
              Jadwal belajar dapat disesuaikan dengan ketersediaan waktu siswa.
            </li>
            <li>
              Perubahan atau cancel jadwal bisa langsung dikomunikasikan dengan
              admin Scheduling.
            </li>
            <li>Durasi belajar setiap sesinya adalah 1,5 - 2 jam.</li>
            <li>
              Frekuensi belajar (jumlah sesi pertemuan) dapat direncanakan
              bersama.
            </li>
            <li>
              Pergantian guru jika merasa kurang cocok bisa dikomunikasikan
              dengan admin Scheduling.
            </li>
            <li>
              Fokus kami: efektivitas kegiatan belajar dan ketercapaian target
              belajar.
            </li>
          </ul>
        </div>

        {/* Card 4: Lokasi Belajar */}
        <div className="fasilitas-mahasiswa-card">
          <img
            loading="lazy"
            src="/images/icon/fasilitas/location.webp"
            alt="Icon Lokasi Belajar"
            className="fasilitas-mahasiswa-icon"
          />
          <h2 className="fasilitas-mahasiswa-title">Lokasi Belajar</h2>
          <ul className="fasilitas-mahasiswa-list">
            <li>
              <strong>Privat Offline:</strong>
              <ul>
                <li>Belajar dengan sistem tatap muka langsung</li>
                <li>Guru privat datang ke rumah</li>
                <li>Sistem belajar One on One Tutoring (Privat 1 siswa)</li>
                <li>
                  Area jangkauan: Jakarta, Bogor, Depok, Tangerang, Tangsel,
                  Bekasi, dan sekitarnya.
                </li>
              </ul>
            </li>
            <li>
              <strong>Privat Online:</strong>
              <ul>
                <li>
                  Belajar dengan guru privat secara Online menggunakan Zoom,
                  Google Meet atau aplikasi lain.
                </li>
                <li>Sistem belajar One on One Tutoring (Privat 1 siswa)</li>
                <li>
                  Area Jangkauan: seluruh wilayah di Indonesia dan Luar Negeri.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FasilitasMahasiswa;
