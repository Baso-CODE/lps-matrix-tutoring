// src/PageLinkTree.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor file CSS AOS
import {
  BookA,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Computer,
  Globe,
  GraduationCap,
  Instagram,
  MapPin,
  MessageCircleMore,
  PencilRuler,
  Shield,
} from "lucide-react";
import "./PageLinkTree.css";
import { PiTiktokLogo } from "react-icons/pi";

const PageLinkTree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openWhatsApp = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const messageTemplate =
    "Halo Kak, mohon info terkait program di Bimbel LPS. Saya dapat info dari sosial media @bimbellps.";

  const programMessageTemplate = (programName) =>
    `Halo Kak, mohon info program ${programName}. Saya dapat informasi dari akun sosial media @bimbellps`;

  return (
    <div className="home-page-container">
      <header className="header" data-aos="fade-down">
        <img src="/images/LOGO2.webp" className="logo-linktree" alt="" />
        <p className="subtitle">
          Bimbingan Belajar Spesialis Persiapan Masuk PTN, UTBK-SNBT, Simak
          UI/KKI, IUP UGM, dan Ujian Mandiri PTN.
        </p>
        <div className="social-media" data-aos="fade-down" data-aos-delay="200">
          <a
            href="https://www.instagram.com/bimbellps?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <Instagram />
          </a>
          <a
            href="https://www.tiktok.com/@lesprivatsbmptn.com?_r=1&_t=ZS-918OcGnyuIS"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <PiTiktokLogo />
          </a>
          <a
            href="https://www.lesprivatsbmptn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <Globe />
          </a>
        </div>
      </header>

      <main className="main-content">
        {/* PROMO */}
        <section className="section" data-aos="fade-up">
          <h2 className="section-title">Promo Spesial</h2>
          <button
            className="promo-item"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() =>
              openWhatsApp(
                "6285774023474",
                "Halo Kak, saya lihat di sosial media @bimbellps dan saya ingin Free Assessment Test dong."
              )
            }>
            <span>✨ Free Assessment Test</span>
            <ChevronRight size={20} />
          </button>
          <button
            className="promo-item"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() =>
              openWhatsApp(
                "6282258689993",
                "Halo Kak, saya lihat di sosial media @bimbellps dan saya ingin tau lebih banyak tentang Diskon Rp500 ribu dong."
              )
            }>
            <span>💰 Diskon Rp500 ribu Untuk Semua Program</span>
            <ChevronRight size={20} />
          </button>
        </section>

        {/* KONSULTASI */}
        <section className="section" data-aos="fade-up">
          <h2 className="section-title">Konsultasi Sekarang</h2>
          <button
            className="consultation-item"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => openWhatsApp("6285774023474", messageTemplate)}>
            <div className="item-content">
              <MessageCircleMore size={20} />
              <div className="item-text">
                <span>Hubungi Kak Ayu</span>
              </div>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="consultation-item"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => openWhatsApp("6282258689993", messageTemplate)}>
            <div className="item-content">
              <MessageCircleMore size={20} />
              <div className="item-text">
                <span>Hubungi Kak Nia</span>
              </div>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="consultation-item"
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() => openWhatsApp("6281311778441", messageTemplate)}>
            <div className="item-content">
              <MessageCircleMore size={20} />
              <div className="item-text">
                <span>Hubungi Kak Alfi</span>
              </div>
            </div>
            <ChevronRight size={20} />
          </button>
        </section>

        {/* DAFTAR PROGRAM */}
        <section className="section" data-aos="fade-up">
          <h2 className="section-title">Daftar Program Bimbel LPS</h2>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() =>
              openWhatsApp(
                "6285774023474",
                programMessageTemplate(
                  "Intensif Karantina Supercamp UTBK SNBT & Kedokteran"
                )
              )
            }>
            <div className="item-content">
              <GraduationCap size={20} />
              <span>Intensif Karantina Supercamp UTBK SNBT & Kedokteran</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() =>
              openWhatsApp(
                "6285774023474",
                programMessageTemplate("Intensif Privat UTBK SNBT")
              )
            }>
            <div className="item-content">
              <ClipboardCheck size={20} />
              <span>Intensif Privat UTBK SNBT</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() =>
              openWhatsApp(
                "6285774023474",
                programMessageTemplate("Intensif Privat Simak UI/KKI")
              )
            }>
            <div className="item-content">
              <Building2 size={20} />
              <span>Intensif Privat Simak UI/KKI</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() =>
              openWhatsApp(
                "6282258689993",
                programMessageTemplate("Intensif Privat UM PTN")
              )
            }>
            <div className="item-content">
              <BookA size={20} />
              <span>Intensif Privat UM PTN</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="500"
            onClick={() =>
              openWhatsApp(
                "6282258689993",
                programMessageTemplate("Intensif Privat Pascasarjana")
              )
            }>
            <div className="item-content">
              <Briefcase size={20} />
              <span>Intensif Privat Pascasarjana</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={() =>
              openWhatsApp(
                "6282258689993",
                programMessageTemplate("Intensif Privat Sekolah Kedinasan")
              )
            }>
            <div className="item-content">
              <BookOpen size={20} />
              <span>Intensif Privat Sekolah Kedinasan</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="700"
            onClick={() =>
              openWhatsApp(
                "6281311778441",
                programMessageTemplate("Intensif Privat CPNS")
              )
            }>
            <div className="item-content">
              <PencilRuler size={20} />
              <span>Intensif Privat CPNS</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="800"
            onClick={() =>
              openWhatsApp(
                "6281311778441",
                programMessageTemplate("Intensif Privat Akademik Sekolah")
              )
            }>
            <div className="item-content">
              <Shield size={20} />
              <span>Intensif Privat Akademik Sekolah SD SMP SMA & TKA</span>
            </div>
            <ChevronRight size={20} />
          </button>
          <button
            className="program-item"
            data-aos="fade-up"
            data-aos-delay="900"
            onClick={() =>
              openWhatsApp(
                "6281311778441",
                programMessageTemplate("Intensif Privat Mahasiswa")
              )
            }>
            <div className="item-content">
              <Computer size={20} />
              <span>Intensif Privat Mahasiswa</span>
            </div>
            <ChevronRight size={20} />
          </button>
        </section>

        {/* MAP */}
        <section className="section" data-aos="fade-up">
          <h2 className="section-title">Alamat Kami</h2>
          <a
            href="https://www.google.com/maps/place/Blok+CP+No+4,+Jl.+Pesona+Khayangan+Cp+Blok+Cp+No.4,+RT.4%2FRW.27,+Mekar+Jaya,+Kec.+Sukmajaya,+Kota+Depok,+Jawa+Barat+16411/@-6.3867618,106.8348119,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69ebf15cabfdc7:0xfaf1f32b758594c0!8m2!3d-6.3867618!4d106.8348119!16s%2Fg%2F11fphvt62p?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="address-item"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="item-content">
              <MapPin size={20} />
              <div className="item-text">
                <span>Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat</span>
                <p>(Lingkungan Pendidikan UI)</p>
              </div>
            </div>
            <ChevronRight size={20} />
          </a>
        </section>
      </main>
    </div>
  );
};

export default PageLinkTree;
