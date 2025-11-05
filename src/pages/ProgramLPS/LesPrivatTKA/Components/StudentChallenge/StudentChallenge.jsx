import "./StudentChallenge.css";

const StudentChallenge = () => {
  return (
    <section className="centered-content_student_challenge-tka">
      <div className="">
        <img
          src="/images/program/TKA-SUBHERO.webp"
          alt="Les Privat Calistung"
          className="les-privat-sd-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/800x360/ff6500/ffffff?text=CHALLENGE+STUDENT+LES+PRIVAT+TKA";
          }}
        />
        <h2>Tantangan Siswa Menghadapi TKA</h2>
        <p>
          Banyak siswa merasa TKA lebih menantang dibanding ujian sekolah biasa.
          Beberapa masalah yang dihadapi siswa saat ini menjelang TKA yang
          semakin dekat waktunya:
        </p>

        <ol className="numbered-list">
          <li>
            Kaget dengan format soal baru yang berbeda dari latihan sehari-hari.
          </li>
          <li>
            Kesulitan menghadapi soal penalaran karena terbiasa menghafal rumus,
            bukan memahami konsep dan logika penalaran.
          </li>
          <li>Kurang terbiasa menganalisis teks atau informasi di dalamnya.</li>
          <li>
            Gugup menghadapi tes berskala nasional, sehingga sulit fokus saat
            ujian.
          </li>
        </ol>

        <p>
          Masalah ini wajar karena TKA memang menguji keterampilan berpikir
          tingkat tinggi (HOTS). Namun demikian, semua ini bisa diatasi dengan
          pendampingan belajar yang intensif dengan guru berpengalaman dan
          berkompeten.
        </p>
      </div>
    </section>
  );
};

export default StudentChallenge;
