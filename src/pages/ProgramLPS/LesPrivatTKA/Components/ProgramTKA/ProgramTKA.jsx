import { CheckCircle } from "lucide-react";
import "./ProgramTKA.css";

const ProgramTKA = () => {
  const subjects = [
    "Matematika Lanjutan",
    "Bahasa Indonesia Lanjutan",
    "Bahasa Inggris Lanjutan",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Sosiologi",
    "Geografi",
    "Sejarah",
    "Antropologi",
    "PPKn/Pendidikan Pancasila",
    "Bahasa Arab",
    "Bahasa Jerman",
    "Bahasa Prancis",
    "Bahasa Jepang",
    "Bahasa Korea",
    "Bahasa Mandarin",
  ];

  const learningMethods = [
    {
      title: "Les Privat ke Rumah",
      description:
        "Les Privat ke Rumah adalah sistem belajar tatap muka di mana guru privat akan datang ke rumah siswa sesuai dengan jadwal yang disepakati bersama. Sesi belajar dengan sistem Les Privat ke Rumah dapat menjangkau Anda yang berlokasi di Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi, Bandung, Bali, Medan, Semarang, Yogyakarta, dan Surabaya.",
    },
    {
      title: "Les Privat Online",
      description:
        "Les Privat Online adalah sistem belajar secara virtual menggunakan Zoom, Google Meet, atau aplikasi pembelajaran lainnya sehingga siswa tetap dapat belajar secara intensif bersama tutor dari lokasi mana pun.",
    },
  ];

  const tkaLevels = [
    "SD/MI/SMP/MTs/sederajat: Bahasa Indonesia dan Matematika.",
    "SMA/MA/SMK/MAK/sederajat: Bahasa Indonesia, Matematika, Bahasa Inggris, dan 2 (dua) mata pelajaran pilihan.",
  ];

  return (
    <section className="program-tka-section">
      <article className="program-tka-glass">
        <span className="program-tka-specular" aria-hidden="true" />
        <span className="program-tka-refraction" aria-hidden="true" />

        <div className="program-tka-header">
          <h2 className="program-tka-title">
            Program Les Privat TKA - LPS Education
          </h2>
        </div>

        <div className="program-tka-intro">
          <p className="program-tka-description">
            LPS Education memahami kegelisahan siswa dan orang tua dalam
            menghadapi ujian model baru bernama Tes Kemampuan Akademik (TKA) ini
            karenanya kami menghadirkan Program Les Privat TKA yang dirancang
            khusus untuk membantu siswa SD, SMP, dan SMA/SMK dalam mempersiapkan
            diri secara matang.
          </p>

          <p className="program-tka-description">
            Les Privat TKA - LPS Education Tutoring bukan sekadar belajar materi
            pelajaran, tetapi melatih keterampilan berpikir, strategi
            mengerjakan soal, dan membangun kepercayaan diri. Dengan sistem
            privat, anak akan mendapatkan perhatian penuh dari tutor
            berpengalaman dan berkompeten.
          </p>

          <p className="program-tka-description">
            Jadwal belajar siswa privat fleksibel disesuaikan dengan permintaan
            dan kebutuhan siswa, serta waktu luang yang dimiliki. Ingin belajar
            setiap hari atau seminggu berapa kali pertemuan, di hari apa saja
            dan jam berapa, bisa disesuaikan dengan permintaan siswa/orangtua.
          </p>

          <p className="program-tka-description">
            LPS Education memiliki Layanan Program Les Privat TKA dengan sistem
            belajar, yaitu <b>Les Privat ke Rumah</b> dan{" "}
            <b>Les Privat Online</b>.
          </p>
        </div>

        <div className="program-tka-method-grid">
          {learningMethods.map((method, index) => (
            <article className="program-tka-method-card" key={method.title}>
              <span
                className="program-tka-method-specular"
                aria-hidden="true"
              />

              <span className="program-tka-method-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="program-tka-method-title">{method.title}</h3>

              <p className="program-tka-method-description">
                {method.description}
              </p>
            </article>
          ))}
        </div>

        <span className="program-tka-orb" aria-hidden="true" />
      </article>

      <article className="program-tka-subject-glass">
        <span className="program-tka-specular" aria-hidden="true" />
        <span className="program-tka-refraction" aria-hidden="true" />

        <div className="program-tka-header">
          <h2 className="program-tka-title">
            Les Privat Mata Pelajaran Tes Kemampuan Akademik (TKA)
          </h2>

          <p className="program-tka-description">
            LPS Education Tutoring memiliki Program Les Privat TKA yang
            menyediakan Layanan Les Privat untuk Mata Pelajaran TKA sebagai
            berikut:
          </p>
        </div>

        <ol className="program-tka-level-list">
          {tkaLevels.map((item, index) => (
            <li key={item} className="program-tka-level-item">
              <span className="program-tka-level-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="program-tka-level-text">{item}</span>
            </li>
          ))}
        </ol>

        <p className="program-tka-description program-tka-subject-description">
          Selain Matematika, Bahasa Indonesia, dan Bahasa Inggris, LPS Education
          Tutoring juga menyediakan Layanan Les Privat untuk belajar Mata
          Pelajaran Pilihan di antaranya:
        </p>

        <ul className="subject-list-les-private-tka">
          {subjects.map((subject) => (
            <li key={subject} className="subject-list-les-private-tka-item">
              <span className="subject-list-les-private-tka-check">
                <CheckCircle
                  className="subject-list-les-private-tka-icon"
                  strokeWidth={2.2}
                />
              </span>

              <span className="subject-list-les-private-tka-text">
                {subject}
              </span>
            </li>
          ))}
        </ul>

        <span className="program-tka-orb" aria-hidden="true" />
      </article>
    </section>
  );
};

export default ProgramTKA;
