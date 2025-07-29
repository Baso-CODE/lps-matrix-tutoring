import "./SolusiSuksesMasukPTN.css";

const SolusiSuksesMasukPTN = () => {
  return (
    <div className="container-solusi-sukses">
      <h2 className="solusi-title">
        Solusi Sukses Masuk PTN –{" "}
        <span className="color-d2b04c"> Guru Les Privat ONLINE</span> & Datang
        ke Rumah
      </h2>

      <div className="card-container-solusi-sukses-ptn">
        {/* Card 1: Expert Tutor */}
        <div className="card-solusi-sukses-ptn" data-aos="fade-right">
          <div className="card-header-solusi-sukses-ptn">
            <img
              loading="lazy"
              src="/images/solusi-sukses/expert_tutor.gif"
              alt="Ilustrasi Guru Les Privat Ahli di Bidangnya, Alumni dan Mahasiswa dari PTN Terbaik"
              className="card-icon-solusi-sukses-ptn"
            />
            <h3 className="card-title-solusi-sukes-ptn">Expert Tutor</h3>
          </div>
          <p className="card-description-solusi-sukses-ptn">
            Kami mengirimkan pengajar yang ahli di bidangnya sesuai dengan
            kebutuhan siswa. Pengajar kami adalah alumni dan mahasiswa dari UI,
            ITB, UGM, dan PTN Terbaik. Berpengalaman, Terseleksi, Ramah &
            Berkualitas.
          </p>
        </div>

        {/* Card 2: Smart Method */}
        <div className="card-solusi-sukses-ptn" data-aos="fade-up">
          <div className="card-header-solusi-sukses-ptn">
            <img
              loading="lazy"
              src="/images/solusi-sukses/smart_methode.gif"
              alt="Ilustrasi Metode Pembelajaran Cerdas yang Terintegrasi untuk Siswa"
              className="card-icon-solusi-sukses-ptn"
            />
            <h3 className="card-title-solusi-sukes-ptn">Smart Method</h3>
          </div>
          <p className="card-description-solusi-sukses-ptn">
            Metode terintegrasi yang sangat sesuai dengan kebutuhan setiap
            siswa. Students Mapping, Kurikulum Personal, Privat Intensif, Modul
            Belajar Khusus, TO Progresif, Strategi Belajar & Rekomendasi
            Penjurusan.
          </p>
        </div>

        {/* Card 3: Exclusive Services */}
        <div className="card-solusi-sukses-ptn" data-aos="fade-left">
          <div className="card-header-solusi-sukses-ptn">
            <img
              loading="lazy"
              src="/images/solusi-sukses/exclusive.gif"
              alt="Ilustrasi Layanan Eksklusif yang Menjamin Kualitas dan Kepuasan"
              className="card-icon-solusi-sukses-ptn"
            />
            <h3 className="card-title-solusi-sukes-ptn">Exclusive Services</h3>
          </div>
          <p className="card-description-solusi-sukses-ptn">
            Kami memastikan melayani sesuai dengan SOP perusahaan. Tim LPS
            selalu berupaya 100% dalam memberikan layanan. Kami senantiasa
            responsif dan siap memberikan yang terbaik untuk Anda.
          </p>
        </div>
      </div>
      {/* New Description Below Cards */}
    </div>
  );
};

export default SolusiSuksesMasukPTN;
