import "./StudentChallenge.css";

const challenges = [
  "Kaget dengan format soal baru yang berbeda dari latihan sehari-hari.",
  "Kesulitan menghadapi soal penalaran karena terbiasa menghafal rumus, bukan memahami konsep dan logika penalaran.",
  "Kurang terbiasa menganalisis teks atau informasi di dalamnya.",
  "Gugup menghadapi tes berskala nasional, sehingga sulit fokus saat ujian.",
];

const StudentChallenge = () => {
  return (
    <section className="student-challenge-tka">
      <article className="student-challenge-tka__glass">
        <span className="student-challenge-tka__specular" aria-hidden="true" />

        <span
          className="student-challenge-tka__refraction"
          aria-hidden="true"
        />

        <div className="student-challenge-tka__image-wrapper">
          <img
            src="/images/program/TKA-SUBHERO-optimized.webp"
            alt="Tantangan siswa menghadapi TKA"
            className="student-challenge-tka__image"
            loading="lazy"
            decoding="async"
            width={900}
            height={675}
          />
        </div>

        <div className="student-challenge-tka__content">
          <h2 className="student-challenge-tka__title">
            Tantangan Siswa Menghadapi TKA
          </h2>

          <p className="student-challenge-tka__description">
            Banyak siswa merasa TKA lebih menantang dibanding ujian sekolah
            biasa. Beberapa masalah yang dihadapi siswa saat ini menjelang TKA
            yang semakin dekat waktunya:
          </p>

          <ol className="student-challenge-tka__list">
            {challenges.map((item, index) => (
              <li key={item} className="student-challenge-tka__item">
                <span className="student-challenge-tka__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="student-challenge-tka__item-text">{item}</span>
              </li>
            ))}
          </ol>

          <div className="student-challenge-tka__closing">
            <p className="student-challenge-tka__description">
              Masalah ini wajar karena TKA memang menguji keterampilan berpikir
              tingkat tinggi (HOTS). Namun demikian, semua ini bisa diatasi
              dengan pendampingan belajar yang intensif dengan guru
              berpengalaman dan berkompeten.
            </p>
          </div>
        </div>

        <span className="student-challenge-tka__orb" aria-hidden="true" />
      </article>
    </section>
  );
};

export default StudentChallenge;
