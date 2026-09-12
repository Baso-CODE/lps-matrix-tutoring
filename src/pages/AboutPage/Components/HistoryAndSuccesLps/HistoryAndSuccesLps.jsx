import "./HistoryAndSuccesLps.css";

const HistoryAndSuccesLps = () => {
  return (
    <section className="history-success-lps">
      <article className="history-success-card history-success-card--history">
        <span className="history-success-card__specular" aria-hidden="true" />
        <span className="history-success-card__refraction" aria-hidden="true" />

        <div className="history-success-card__image-wrapper">
          <span
            className="history-success-image__specular"
            aria-hidden="true"
          />

          <img
            loading="lazy"
            src="/images/about-us/history-us.webp"
            alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
            className="history-success-card__image"
          />
        </div>

        <div className="history-success-card__content">
          <h2 className="history-success-card__title">History</h2>

          <p className="history-success-card__paragraph">
            LPS Education adalah lembaga Les Privat ONLINE dan Privat ke Rumah
            yang didirikan oleh alumni Universitas Indonesia yang telah
            berpengalaman lebih dari 10 tahun dalam layanan bimbel, les privat,
            dan kerjasama homeschooling. Dengan tingginya kebutuhan dukungan
            akademik yang sifatnya personal dan customized di area Jabodetabek
            maka dengan merekrut para pengajar yang berkompeten dan profesional,
            LPS Education siap memberikan layanan terbaik.
          </p>

          <p className="history-success-card__paragraph">
            Seiring dengan berjalannya waktu, LPS Education selalu mengalami
            pertumbuhan positif. Ribuan siswa hebat telah bergabung dan
            dibimbing oleh pengajar yang smart. Diiiringi dengan layanan
            berkualitas, selalu berfokus pada peningkatan prestasi siswa, LPS
            Education telah menjadi kepercayaan orang tua untuk mendampingi anak
            dalam belajar.
          </p>
        </div>

        <span className="history-success-card__orb" aria-hidden="true" />
      </article>

      <article className="history-success-card history-success-card--success">
        <span className="history-success-card__specular" aria-hidden="true" />
        <span className="history-success-card__refraction" aria-hidden="true" />

        <div className="history-success-card__content">
          <h2 className="history-success-card__title">Success Story</h2>

          <p className="history-success-card__paragraph">
            Dalam perjalanan bisnis yang dinamis, LPS Education mendapatkan
            kepercayaan orang tua siswa untuk menangani siswa yang berasal dari
            berbagai sekolah nasional dan sekolah internasional. Tidak hanya
            dari Indonesia, siswa LPS Education juga ada yang berasal dari
            kalangan expatriates.
          </p>

          <p className="history-success-card__paragraph">
            Kami meyakini bahwa siswa adalah amanah yang diberikan oleh orang
            tua. Dengan saling support informasi, kami dapat mengupayakan
            program terbaik untuk Anda. Pengajar dengan metode dan pendekatan
            mengajar yang bagus juga merupakan salah satu kunci keberhasilan LPS
            Education dalam mengantarkan siswa sukses akademis.
          </p>

          <p className="history-success-card__paragraph">
            Terima Kasih atas kepercayaan Anda.
          </p>
        </div>

        <div className="history-success-card__image-wrapper">
          <span
            className="history-success-image__specular"
            aria-hidden="true"
          />

          <img
            loading="lazy"
            src="/images/about-us/succes-story.webp"
            alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
            height="1152"
            width="834"
            className="history-success-card__image"
          />
        </div>

        <span className="history-success-card__orb" aria-hidden="true" />
      </article>
    </section>
  );
};

export default HistoryAndSuccesLps;
