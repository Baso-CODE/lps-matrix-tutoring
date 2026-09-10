import "./SolusiSuksesMasukPTN.css";

const SolusiSuksesMasukPTN = () => {
  return (
    <section className="container-solusi-sukses">
      <div className="solusi-bg-orb solusi-bg-orb-1" aria-hidden="true"></div>
      <div className="solusi-bg-orb solusi-bg-orb-2" aria-hidden="true"></div>

      <div className="solusi-inner">
        <h2 className="solusi-title">
          Solusi Sukses Masuk PTN –
          <span className="color-d2b04c"> Guru Les Privat ONLINE</span> & Datang
          ke Rumah
        </h2>

        <div className="card-container-solusi-sukses-ptn">
          {/* Card 1 */}
          <div className="card-solusi-sukses-ptn">
            <span className="glass-reflection" aria-hidden="true"></span>

            <div className="card-header-solusi-sukses-ptn">
              <div className="icon-wrap-solusi">
                <img
                  loading="lazy"
                  src="/images/solusi-sukses/expert_tutor.webp"
                  alt="Ilustrasi Guru Les Privat Ahli di Bidangnya, Alumni dan Mahasiswa dari PTN Terbaik"
                  className="card-icon-solusi-sukses-ptn"
                />
              </div>
              <h3 className="card-title-solusi-sukes-ptn">Expert Tutor</h3>
            </div>

            <p className="card-description-solusi-sukses-ptn">
              Kami mengirimkan pengajar yang ahli di bidangnya sesuai dengan
              kebutuhan siswa. Pengajar kami adalah alumni dan mahasiswa dari
              UI, ITB, UGM, dan PTN terbaik. Berpengalaman, terseleksi, ramah,
              dan berkualitas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-solusi-sukses-ptn">
            <span className="glass-reflection" aria-hidden="true"></span>

            <div className="card-header-solusi-sukses-ptn">
              <div className="icon-wrap-solusi">
                <img
                  loading="lazy"
                  src="/images/solusi-sukses/smart_methode.webp"
                  alt="Ilustrasi Metode Pembelajaran Cerdas yang Terintegrasi untuk Siswa"
                  className="card-icon-solusi-sukses-ptn"
                />
              </div>
              <h3 className="card-title-solusi-sukes-ptn">Smart Method</h3>
            </div>

            <p className="card-description-solusi-sukses-ptn">
              Metode terintegrasi yang sangat sesuai dengan kebutuhan setiap
              siswa. Students Mapping, kurikulum personal, privat intensif,
              modul belajar khusus, TO progresif, strategi belajar, dan
              rekomendasi penjurusan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-solusi-sukses-ptn">
            <span className="glass-reflection" aria-hidden="true"></span>

            <div className="card-header-solusi-sukses-ptn">
              <div className="icon-wrap-solusi">
                <img
                  loading="lazy"
                  src="/images/solusi-sukses/exclusive.webp"
                  alt="Ilustrasi Layanan Eksklusif yang Menjamin Kualitas dan Kepuasan"
                  className="card-icon-solusi-sukses-ptn"
                />
              </div>
              <h3 className="card-title-solusi-sukes-ptn">
                Exclusive Services
              </h3>
            </div>

            <p className="card-description-solusi-sukses-ptn">
              Kami memastikan melayani sesuai SOP perusahaan. Tim LPS Education
              selalu berupaya maksimal dalam memberikan layanan. Kami senantiasa
              responsif dan siap memberikan yang terbaik untuk Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolusiSuksesMasukPTN;
