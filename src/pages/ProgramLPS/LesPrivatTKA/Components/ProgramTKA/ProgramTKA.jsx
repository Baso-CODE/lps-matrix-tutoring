import "./ProgramTKA.css";
import { FaCheckCircle } from "react-icons/fa";
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
  return (
    <section className="centered-content_program-tka">
      <div className="">
        <h2>Program Les Privat TKA - LPS Education</h2>
        <p>
          LPS Education memahami kegelisahan siswa dan orang tua dalam
          menghadapi ujian model baru bernama Tes Kemampuan Akademik (TKA) ini
          karenanya kami menghadirkan Program Les Privat TKA yang dirancang
          khusus untuk membantu siswa SD, SMP, dan SMA/SMK dalam mempersiapkan
          diri secara matang.
        </p>
        <p>
          Les Privat TKA - LPS Education Tutoring bukan sekadar belajar materi
          pelajaran, tetapi melatih keterampilan berpikir, strategi mengerjakan
          soal, dan membangun kepercayaan diri. Dengan sistem privat, anak akan
          mendapatkan perhatian penuh dari tutor berpengalaman dan berkompeten.
        </p>
        <p>
          Jadwal belajar siswa privat fleksibel disesuaikan dengan permintaan
          dan kebutuhan siswa, serta waktu luang yang dimiliki. Ingin belajar
          setiap hari atau seminggu berapa kali pertemuan, di hari apa saja dan
          jam berapa, bisa disesuaikan dengan permintaan siswa/orangtua.
        </p>
        <p>
          LPS Education memiliki Layanan Program Les Privat TKA dengan sistem
          belajar, yaitu <b>Les Privat ke Rumah</b> dan <b>Les Privat Online</b>
          .
        </p>

        <h3>1. Les Privat ke Rumah (Privat Offline )</h3>
        <p>
          Les Privat ke Rumah adalah sistem belajar tatap muka di mana guru
          privat akan datang ke rumah siswa sesuai dengan jadwal yang sepakati
          bersama. Sesi belajar dengan sistem Les Privat ke Rumah dapat
          menjangkau Anda yang berlokasi di Jakarta, Bogor, Depok, Tangerang,
          Tangsel, Bekasi, Bandung, Bali, Medan, Semarang, Yogyakarta, dan
          Surabaya.
        </p>

        <h3>2. Les Privat Online (Via Zoom/Google Meet)</h3>
        <p>
          Les Privat ke Rumah adalah sistem belajar tatap muka di mana guru
          privat akan datang ke rumah siswa sesuai dengan jadwal yang sepakati
          bersama. Sesi belajar dengan sistem Les Privat ke Rumah dapat
          menjangkau Anda yang berlokasi di Jakarta, Bogor, Depok, Tangerang,
          Tangsel, Bekasi, Bandung, Bali, Medan, Semarang, Yogyakarta, dan
          Surabaya.
        </p>
      </div>
      <br />
      <br />
      <div className="">
        <h2>Les Privat Mata Pelajaran Tes Kemampuan Akademik (TKA)</h2>
        <p>
          LPS Education Tutoring memiliki Program Les Privat TKA yang
          menyediakan Layanan Les Privat untuk Mata Pelajaran TKA sebagai
          berikut:
        </p>
        <ol className="numbered-list">
          <li>SD/MI/SMP/MTs/sederajat: Bahasa Indonesia dan Matematika.</li>
          <li>
            SMA/MA/SMK/MAK/sederajat: Bahasa Indonesia, Matematika, Bahasa
            Inggris, dan 2 (dua) mata pelajaran pilihan.
          </li>
        </ol>
        <p>
          Selain Matematika, Bahasa Indonesia, dan Bahasa Inggris, LPS Education
          Tutoring juga menyediakan Layanan Les Privat untuk belajar Mata
          Pelajaran Pilihan di antaranya:
        </p>
        <ul className="subject-list-les-private-tka">
          {subjects.map((subject, index) => (
            <li key={index} className="subject-list-les-private-tka-item">
              <FaCheckCircle className="subject-list-les-private-tka-icon" />
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProgramTKA;
