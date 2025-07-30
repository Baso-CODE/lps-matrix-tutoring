import "./FasilitasSimakUI.css";

const FasilitasSimakUI = () => {
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
            <li>Modul Belajar Prediktif</li>
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
              Implementasi efektif model belajar berdasarkan hasil dari mapping
              kebutuhan siswa
            </li>
            <li>Penguasaan strategi belajar efektif Simak UI</li>
            <li>Peningkatan kemampuan mengerjakan soal secara cepat & tepat</li>
            <li>Siswa siap menghadapi Simak UI</li>
            <li>Siswa sukses masuk UI sesuai dengan jurusan yang diinginkan</li>
          </ul>
        </div>

        {/* Card 3: Scheduling */}
        <div className="fasilitas-simak-ui-card">
          <img
            loading="lazy"
            src="/images/icon/fasilitas/Scheduling.webp"
            alt="Icon Fasilitas"
            className="fasilitas-icon"
          />
          <h2 className="fasilitas-title">Scheduling</h2>
          <ul className="fasilitas-list">
            <li>Penjadwalan dapat disesuaikan dengan waktu siswa.</li>
            <li>Durasi belajar setiap sesinya adalah 2 jam.</li>
            <li>Frekuensi belajar dapat direncanakan bersama.</li>
            <li>
              Fokus kami : Efektivitas Kegiatan Belajar Ketercapaian Target
              Belajar.
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
            <li>Cabang di seluruh Indonesia</li>

            <li>
              Siswa luar JABODETABEK dilaksanakan menggunakan metode les privat
              online via aplikasi Zoom atau video call lainnya yang dapat
              menjangkau seluruh Indonesia
            </li>
            <li>
              Siswa JABODETABEK dilaksanakan di rumah siswa atau privat online
              dengan aplikasi video call
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FasilitasSimakUI;
