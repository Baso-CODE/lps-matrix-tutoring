import "./CpnsStages.css";

const CpnsStages = () => {
  const stages = [
    {
      id: 1,
      title: "Pendaftaran Online",
      icon: "/images/icon/cpns/cpns-stage/registration.webp",
      description:
        "Peserta membuat akun di portal SSCASN, mengisi data diri, memilih instansi dan formasi, serta mengunggah dokumen persyaratan.",
    },
    {
      id: 2,
      title: "Seleksi Administrasi",
      icon: "/images/icon/cpns/cpns-stage/admin-selection.webp", // Ikon seleksi dokumen
      description:
        "Verifikasi dokumen dan kualifikasi yang diunggah. Peserta yang lolos akan diumumkan dan berhak mengikuti tahap selanjutnya.",
    },
    {
      id: 3,
      title: "Seleksi Kompetensi Dasar (SKD)",
      icon: "/images/icon/cpns/cpns-stage/skd-test.webp", // Ikon tes SKD (CAT)
      description:
        "Ujian berbasis komputer (CAT) meliputi Tes Wawasan Kebangsaan (TWK), Tes Intelegensi Umum (TIU), dan Tes Karakteristik Pribadi (TKP).",
    },
    {
      id: 4,
      title: "Seleksi Kompetensi Bidang (SKB)",
      icon: "/images/icon/cpns/cpns-stage/skb-test.webp", // Ikon tes SKB
      description:
        "Ujian lanjutan yang spesifik sesuai formasi jabatan, bisa berupa tes wawancara, praktik kerja, psikotes, atau tes keahlian lainnya.",
    },
    {
      id: 5,
      title: "Pengumuman Kelulusan Akhir",
      icon: "/images/icon/cpns/cpns-stage/announcement.webp", // Ikon pengumuman
      description:
        "Pengumuman resmi peserta yang lolos seleksi berdasarkan integrasi nilai SKD dan SKB.",
    },
    {
      id: 6,
      title: "Pemberkasan & Usul NIP",
      icon: "/images/icon/cpns/cpns-stage/documents.webp", // Ikon berkas
      description:
        "Peserta melengkapi berkas administrasi yang diperlukan untuk pengusulan Nomor Induk Pegawai (NIP).",
    },
    {
      id: 7,
      title: "Penetapan NIP & SK CPNS",
      icon: "/images/icon/cpns/cpns-stage/pns-status.webp", // Ikon PNS
      description:
        "NIP ditetapkan dan Surat Keputusan (SK) Calon Pegawai Negeri Sipil (CPNS) diterbitkan, menandai status sebagai CPNS.",
    },
    {
      id: 8,
      title: "Pelantikan & Sumpah Jabatan",
      icon: "/images/icon/cpns/cpns-stage/oath.webp", // Ikon pelantikan/sumpah
      description:
        "Resmi dilantik dan diambil sumpah sebagai Pegawai Negeri Sipil (PNS), siap mengabdi untuk negara.",
    },
  ];

  return (
    <section className="cpns-stages-section">
      <div className="container-general-cpns-stage">
        <h2 className="cpns-stages-title">
          Tahapan Menuju <span>PNS Impian</span> Anda
        </h2>
        <p className="cpns-stages-subtitle">
          Dari pendaftaran hingga resmi dilantik, kami memandu Anda memahami
          setiap langkah krusial dalam seleksi CPNS.
        </p>
        <div className="stages-grid">
          {stages.map((stage) => (
            <div key={stage.id} className="stage-card">
              <div className="stage-number">{stage.id}</div>
              <div className="stage-icon-wrapper">
                <img src={stage.icon} alt={stage.title} loading="lazy" />
              </div>
              <h3 className="stage-title">{stage.title}</h3>
              <p className="stage-description">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CpnsStages;
