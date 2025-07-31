const FasilitasSDSMPSMA = () => {
  return (
    <div className="fasilitas-simak-ui-container">
      {/* Card Container */}
      <div className="fasilitas-simak-ui-cards">
        {/* Card 1: Fasilitas */}
        <div className="fasilitas-simak-ui-card">
          <img
            src="/images/icon/fasilitas/fasilitas.webp"
            alt="Icon Fasilitas"
            className="fasilitas-icon"
            loading="lazy"
          />
          <h2 className="fasilitas-title">Fasilitas</h2>
          <ul className="fasilitas-list">
            <li>Mapping kebutuhan belajar siswa</li>
            <li>Kegiatan belajar privat terprogram & intensif</li>
            <li>Pengajar yang berkualitas dari UI & PTN Terbaik</li>
            <li>Bimbingan dan arahan strategi belajar efektif</li>
            <li>Progress report & evaluasi belajar secara berkala</li>
          </ul>
        </div>
        {/* Card 2: Target Belajar */}
        <div className="fasilitas-simak-ui-card">
          <img
            loading="lazy"
            src="/images/icon/fasilitas/target.webp"
            alt="Icon Fasilitas"
            className="fasilitas-icon"
          />
          <h2 className="fasilitas-title">Target Belajar</h2>
          <ul className="fasilitas-list">
            <li>
              Implementasi model belajar yang efektif berdasarkan hasil dari
              pemetaan kebutuhan dan kemampuan siswa.
            </li>
            <li>
              Penguasaan strategi belajar untuk memaksimalkan pemahaman dan
              performa akademik.
            </li>
            <li>
              {" "}
              Peningkatan kemampuan dalam mengerjakan soal-soal secara cepat,
              tepat, dan terstruktur.
            </li>
            <li>
              Siswa siap menghadapi PR, Ulangan Harian, Ujian Tengah dan Akhir
              Semester, Ujian Kenaikan Kelas, TKA, dan Ujian masuk jenjang
              berikutnya.
            </li>
            <li>Siswa sukses mencapai target akademik, seperti:</li>
            <ul>
              <li>Nilai rapor yang optimal</li>
              <li>Masuk ke Sekolah Impian</li>
              <li>Meraih Prestasi Akademik yang memuaskan</li>
            </ul>
          </ul>
        </div>

        {/* Card 3: Scheduling */}
        <div className="fasilitas-simak-ui-card">
          <img
            loading="lazy"
            src="/images/icon/fasilitas/schedulling.webp"
            alt="Icon Fasilitas"
            className="fasilitas-icon"
          />
          <h2 className="fasilitas-title">Scheduling</h2>
          <ul className="fasilitas-list">
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
              dengan admin Scheduling
            </li>
            <li>
              Fokus kami: efektivitas kegiatan belajar dan ketercapaian target
              belajar.
            </li>
          </ul>
        </div>
        {/* Card 4: Lokasi Belajar */}
        <div className="fasilitas-simak-ui-card">
          <img
            loading="lazy"
            src="/images/icon/fasilitas/location.webp"
            alt="Icon Fasilitas"
            className="fasilitas-icon"
          />
          <h2 className="fasilitas-title">Lokasi Belajar</h2>
          <ul className="fasilitas-list">
            <li>
              <strong> Privat Offline: </strong>
            </li>
            <ul>
              <li>Belajar dengan sistem tatap muka langsung</li>
              <li>Guru privat datang ke rumah</li>
              <li>Sistem belajar One on One Tutoring (Privat 1 siswa)</li>
              <li>
                Area jangkauan: Jakarta, Bogor, Depok, Tangerang, Tangsel,
                Bekasi, dan sekitarnya.
              </li>
            </ul>

            <li>
              <strong>Privat Online:</strong>
            </li>
            <ul>
              <li>
                Belajar dengan guru privat secara Online menggunakan Zoom,
                Google Meet atau aplikasi lain,
              </li>
              <li>Sistem belajar One on One Tutoring (Privat 1 siswa)</li>
              <li>
                Area Jangkauan: seluruh wilayah di Indonesia dan Luar Negeri.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FasilitasSDSMPSMA;
