import "./ProgramIntensiOSN.css";

const ProgramIntensiOSN = () => {
  return (
    <section className="program-intensif-container__osn">
      <article className="program-intensif-glass__osn">
        <span className="program-intensif-specular__osn" aria-hidden="true" />

        <span className="program-intensif-refraction__osn" aria-hidden="true" />

        <div className="program-intensif-header__osn">
          <span className="program-intensif-eyebrow__osn">
            <span className="program-intensif-eyebrow-dot__osn" />
            Program Olimpiade
          </span>

          <h2 className="program-title__osn">
            Program Super Intensif Privat OSN dan Olimpiade Internasional
          </h2>
        </div>

        <div className="program-intensif-content__osn">
          <div className="program-description-item__osn">
            <span
              className="program-description-number__osn"
              aria-hidden="true">
              01
            </span>

            <p className="program-description__osn">
              Program ini dirancang khusus untuk mendukung siswa dalam persiapan
              kompetisi bergengsi seperti Olimpiade Sains Nasional{" "}
              <span className="color-d2b04c-description">
                (OSN) pada tingkat SD, SMP, dan SMA
              </span>
              . Program ini juga mencakup persiapan Olimpiade Internasional
              seperti <span className="color-d2b04c-description">ISO</span>{" "}
              (International Science Olympiads),{" "}
              <span className="color-d2b04c-description">IMO</span>{" "}
              (International Mathematical Olympiad), dan{" "}
              <span className="color-d2b04c-description">SEAMO</span> (South
              East Asia Mathematical Olympiad) sehingga siswa mendapatkan
              bimbingan yang lengkap dalam bidang sains dan matematika yang
              sesuai dengan standar nasional dan internasional.
            </p>
          </div>

          <div className="program-description-item__osn">
            <span
              className="program-description-number__osn"
              aria-hidden="true">
              02
            </span>

            <p className="program-description__osn">
              Setiap program belajar disesuaikan dengan kebutuhan spesifik
              siswa, berdasarkan bidang olimpiade yang ingin ditekuni dan ujian
              yang akan diambil. Kami mengadakan diskusi mendalam bersama antara
              orang tua dan Konsultan Akademik LPS Education untuk memahami
              minat dan tujuan siswa dalam mengikuti olimpiade. Dengan pemahaman
              tersebut, kami membantu dalam memilih Paket Belajar yang tepat,
              baik dalam bentuk sesi reguler maupun intensif, agar siswa dapat
              mengembangkan pemahaman yang lebih mendalam dan keahlian khusus
              yang diperlukan dalam kompetisi olimpiade.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProgramIntensiOSN;
