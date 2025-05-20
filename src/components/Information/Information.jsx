import "./Information.css";

const Information = () => {
  const informations = [
    {
      title: "Kouta Jalur SNBT UTBK 2025",
      description:
        "Pendaftaran SNBT UTBK 2025 telah dibuka! Pastikan Anda memahami alokasi kouta yang tersedia untuk setiap jalur masuk. Tahun ini, setiap program studi memiliki alokasi kouta yang berbeda berdasarkan kebijakan terbaru dari pemerintah. Oleh karena itu, penting untuk mengecek jumlah kouta yang tersedia untuk program studi yang Anda minati. Jangan lupa, persaingan tahun ini diprediksi akan lebih ketat, sehingga strategi dalam memilih program studi menjadi salah satu kunci utama kesuksesan Anda.",
      image: "/images/informasi/jalur-seleksi.webp",
    },
    {
      title: "Tanggal Pelaksanaan UTBK SNBT 2025",
      description:
        "UTBK SNBT akan dilaksanakan pada bulan Mei 2025. Segera persiapkan diri Anda untuk mencapai hasil terbaik! Jadwal pelaksanaan akan berlangsung dalam beberapa sesi untuk memastikan kelancaran ujian. Pastikan Anda mengetahui jadwal lengkap dan lokasi ujian yang telah ditentukan. Selain itu, gunakan waktu yang tersisa untuk memperdalam pemahaman materi, mencoba simulasi soal, dan menjaga kondisi fisik serta mental agar siap menghadapi ujian dengan percaya diri.",
      image: "/images/informasi/tanggal-penting.webp",
    },
  ];

  const additionalInfo = {
    funFact:
      "Tahukah Anda? Peserta UTBK tahun lalu yang belajar minimal 2 jam sehari memiliki peluang 30% lebih tinggi untuk mendapatkan nilai tinggi.",
    advice:
      "Saran: Jangan lupa untuk mengatur waktu belajar dengan baik, gunakan simulasi UTBK, dan istirahat yang cukup sebelum hari H.",
  };

  return (
    <div className="information-container">
      {/* <h1 className="information-title">Informasi Penting</h1> */}
      {informations.map((info, index) => (
        <div
          className={`information-item ${
            info.title === "Tanggal Pelaksanaan UTBK SNBT 2025" ? "reverse" : ""
          }`}
          key={index}>
          <div className="information-text">
            <h2 className="information-subtitle">{info.title}</h2>
            <p className="information-description">{info.description}</p>
          </div>
          <div className="information-image-container">
            <img
              loading="lazy"
              src={info.image}
              alt={`Ilustrasi informasi ${
                info.title
              }, menampilkan konten visual yang relevan dengan ${
                info.title === "Kouta Jalur SNBT UTBK 2025"
                  ? "alokasi kouta yang tersedia untuk berbagai jalur masuk SNBT 2025"
                  : "jadwal penting pelaksanaan UTBK SNBT 2025 di bulan Mei, yang terdiri dari beberapa sesi ujian."
              }`}
              className="information-image"
            />
          </div>
        </div>
      ))}
      <div className="additional-info">
        <h2 className="additional-info-title">Fun Fact & Saran</h2>
        <p className="additional-info-fact">{additionalInfo.funFact}</p>
        <p className="additional-info-advice">{additionalInfo.advice}</p>
      </div>
    </div>
  );
};

export default Information;
