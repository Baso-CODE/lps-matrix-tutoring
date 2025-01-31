import "./HeroLPSMahasiswa.css";
const HeroLPSMahasiswa = () => {
  return (
    <div className="container-halaman__mahasiswa">
      <div className="content-hero-home__mahasiswa">
        <img
          data-aos="zoom-in-down"
          className="rumah-adat-hero__mahasiswa"
          src={"/images/program/MAHASISWA.webp"}
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <div className="isi-content-hero__mahasiswa">
          <h1 className="title-halaman-hero__mahasiswa">
            Les Privat Mahasiswa – Privat ke Rumah dan Private Online
          </h1>
          <div>
            <p className="child-paragraf-hero__mahasiswa">
              <span className="color-d2b04c-description">
                Les Privat Mahasiswa
              </span>{" "}
              by LPS Matrix siap menjadi teman pendamping Anda dalam belajar
              materi kuliah yang dianggap sulit. Dengan les privat mahasiswa,
              semua mata kuliah yang teramat sulit dikuasai akan menjadi mudah
              untuk dipahami.
            </p>
            <p className="child-paragraf-hero__mahasiswa">
              Tim Pengajar Program Les Privat Mahasiswa adalah para alumni
              terbaik (lulusan) dari universitas favorit seperti UI, ITB, IPB,
              UNJ, Unair, Unpad, Undip dan perguruan tinggi lainnya. Selain itu,
              dalam memilih tutor Mahasiswa, kami melakukan tahap seleksi ketat
              dari mulai seleksi berkas dan CV, interview, tes akademik dan
              Micro Teaching.
            </p>
          </div>

          <button className="btn-learn-more__sd_smp_sma">
            Konsultasi Sekarang
          </button>
        </div>

        {/* Anda sedang membutuhkan layanan Les privat */}
        <h3 className="program-mahasiswa-title-h3">
          Anda Sedang Membutuhkan Les Privat Mahasiswa?
        </h3>
        <p className="additional-description-mahasiswa">
          Kami siap mengirimkan guru les privat terbaik di Jabodetabek untuk
          mengajar materi kuliah jurusan dan universitas. Tidak hanya untuk PTN,
          peserta Program{" "}
          <span className="color-d2b04c-description">Les Privat Mahasiswa</span>{" "}
          kami juga berasal dari berbagai universitas swasta di Indonesia.
          Dengan Program{" "}
          <span className="color-d2b04c-description">Les Privat Mahasiswa</span>{" "}
          , Anda bisa belajar semua mata kuliah yang dibutuhkan bersama
          guru-guru terbaik yang ahli di bidangnya. Program yang didesain untuk
          memenuhi kebutuhan belajar para mahasiswa ini terbagi ke dalam dua
          pilihan, yaitu Privat Offline (Les Privat ke Rumah) dan Bimbel Online
          Mahasiswa.{" "}
          <span className="color-d2b04c-description">Les Privat Mahasiswa</span>{" "}
          dengan sistem guru privat datang ke rumah melayani permintaan les
          privat untuk Anda yang berlokasi di Jakarta, Bogor, Depok, Tangerang,
          Tangsel, Bekasi, BSD, dan sekitarnya. Sementara itu, Les Privat Online
          bisa menjangkau seluruh wilayah di Indonesia.
        </p>
      </div>
    </div>
  );
};

export default HeroLPSMahasiswa;
