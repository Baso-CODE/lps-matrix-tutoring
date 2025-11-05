import { useState } from "react";
import "./OsnCurriculumOverview.css";

const subjects = [
  {
    id: "math",
    name: "Olimpiade Matematika",
    icon: "/images/osn-curiculum/matematilka.webp", // Ganti dengan path ikon yang sesuai
    description:
      "Materi terstruktur dan latihan soal tingkat tinggi untuk aljabar, geometri, kombinatorika, dan teori bilangan.",
  },
  {
    id: "physics",
    name: "Olimpiade Fisika",
    icon: "/images/osn-curiculum/fisika.webp", // Ganti dengan path ikon yang sesuai
    description:
      "Fokus pada mekanika, termodinamika, elektromagnetisme, optik, dan fisika modern dengan pendekatan problem-solving.",
  },
  {
    id: "chemistry",
    name: "Olimpiade Kimia",
    icon: "/images/osn-curiculum/kimia.webp", // Ganti dengan path ikon yang sesuai
    description:
      "Mencakup kimia organik, anorganik, fisik, dan analitik, dilengkapi dengan praktikum virtual dan diskusi kasus.",
  },
  {
    id: "biology",
    name: "Olimpiade Biologi",
    icon: "/images/osn-curiculum/biologi.webp", // Ganti dengan path ikon yang sesuai
    description:
      "Pembelajaran mendalam tentang sel, genetika, ekologi, fisiologi, dan taksonomi untuk persiapan komprehensif.",
  },
  {
    id: "ips",
    name: "Ilmu Pengetahuan Sosial (IPS)",
    icon: "/images/osn-curiculum/pengetahuan-sosial.webp",
    description:
      "Studi tentang masyarakat manusia, termasuk sejarah, geografi, ekonomi, sosiologi, dan antropologi.",
  },
  {
    id: "ipa",
    name: "Ilmu Pengetahuan Alam (IPA)",
    icon: "/images/osn-curiculum/pengetahuan-alam.webp",
    description:
      "Studi tentang alam dan lingkungan sekitar, meliputi biologi, fisika, kimia, dan ilmu bumi.",
  },
];
const OsnCurriculumOverview = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section className="osn-curriculum-overview-section">
      <div className="container-general">
        <h2 className="osn-curriculum-overview-title">
          <span>Kurikulum</span> Materi Olimpiade Sains Nasional
        </h2>
        <p className="osn-curriculum-overview-subtitle">
          Siap taklukkan setiap tantangan OSN? Kurikulum kami dirancang khusus
          oleh pakar olimpiade, membimbing Anda dari dasar hingga strategi juara
          di setiap mata pelajaran.
        </p>
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`subject-card ${
                hoveredCardId !== null && hoveredCardId !== subject.id
                  ? "blurred"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCardId(subject.id)} // Atur ID kartu saat kursor masuk
              onMouseLeave={() => setHoveredCardId(null)} // Setel kembali ke null saat kursor keluar
            >
              <div className="subject-icon-wrapper">
                <img src={subject.icon} alt={subject.name} loading="lazy" />
              </div>
              <h3 className="subject-name">{subject.name}</h3>
              <p className="subject-description">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OsnCurriculumOverview;
