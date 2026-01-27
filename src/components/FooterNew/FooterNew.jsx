import { Link } from "react-router-dom";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./FooterNew.css";
const FooterNew = () => {
  const contactData = useAppSelector(selectContactCsData);
  // Data admin
  const admins = [
    {
      name: "Kak Lin",
      phone: "6282258689993",
    },
    {
      name: "Kak Ayu",
      phone: "6285774023474",
    },
    {
      name: "Kak Fina",
      phone: "6281311778441",
    },
    {
      name: "Kak Lia",
      phone: "6282134093567",
    },
  ];

  // Handler untuk klik banner di footer
  // const handleBannerCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";

  //   handleCTAClickLogic(targetUrl, e, true);
  // };

  // const handleAdminLinkClick = (url, e) => {
  //   handleCTAClickLogic(url, e, true);
  // };

  // Function untuk membuat URL WhatsApp
  const generateWhatsAppUrl = (phone, name) => {
    const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20${encodeURIComponent(
      name,
    )}%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20bertanya%20program%20belajar%20untuk:%0A`;

    const message = `Kelas : \nMapel : \nKurikulum : \nWilayah : `.trim();

    return `${baseUrl}${encodeURIComponent(message)}`;
  };

  const currentYear = new Date().getFullYear();
  return (
    <footer className="container-footer">
      <div className="new-footer">
        <div className="new-footer-section">
          <h3>Our Office</h3>
          <h4>
            Bimbel Masuk FK, PTN, Kedinasan Akademik SD SMP SMA TKA Mahasiswa
            Olimpiade LPDP & CPNS
          </h4>
          <ul>
            <li>- Guru Kerumah</li>
            <li>- Privat Online</li>
            <li>- Supercamp Masuk FK & PTN</li>
          </ul>
          <br />

          <h4>OFFICE</h4>
          <p className="new-footer-section-alamat">
            Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat (Lingkungan
            Pendidikan UI)
          </p>

          {/* <h4>TELEPON KANTOR:</h4>
          <p className="new-footer-section-alamat">021-2761-2993</p> */}

          <h4>Jam kunjugan visit:</h4>
          <p className="new-footer-section-alamat">
            Senin sd Jumat: 09.00 – 16.00 WIB
            <br />
            Sabtu: 09.00 – 13.00 WIB
          </p>
          <br />

          <h4>Hubungi Kami:</h4>
          <ul>
            {admins.map((admin, index) => (
              <li key={index}>
                <Link
                  to={generateWhatsAppUrl(admin.phone, admin.name)}
                  className="admin-link">
                  <span className="admin-name">{admin.name}:</span>{" "}
                  {admin.phone}
                </Link>
              </li>
            ))}
          </ul>

          <h4>Layanan Call dan Pesan WhatsApp buka 24 jam setiap hari</h4>
        </div>
        <div className="new-footer-section">
          <h3>Company Profile</h3>
          <p className="new-footer-section-description">
            LPS Education (ONLINE & OFFLINE) adalah Bimbel Peningkatan Prestasi
            Akademik Sekolah dan Persiapan Masuk PTN Favorit (UI ITB UGM IPB
            Unpad & PTN terbaik lainnya) Kelas Regular dan KKI/IUP. Didirikan
            oleh Alumni Universitas Indonesia yang telah berpengalaman lebih
            dari 15 tahun dalam layanan bimbel, les privat dan kerjasama
            homeschooling.
          </p>
          <p className="new-footer-section-description">
            Program belajar didesain secara sistematis, terstruktur, terukur dan
            teruji. Pembelajaran Tematik berdasar Statistik Soal yang diujikan.
            Kami siap membantu meraih Prestasi Akademik dan Sukes Masuk PTN
            Favorit.
          </p>
          <p className="new-footer-section-description">
            Kami juga memiliki Program Unggulan seperti Les Privat Akademik SD,
            SMP, SMA, TKA, Privat Mahasiswa, TOEFL/IELTS, CPNS, Kedinasan, dan
            Les Privat Olimpiade (Nasional/Internasional). Pastikan pilih
            partner terbaik untuk kesuksesan dan masa depanmu.
          </p>
        </div>
        <div className="new-footer-section">
          <h3>Navigation</h3>
          <ul className="footer-nav">
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <span>Company Profile</span>
              <ul>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="#">Our Student&apos;s School</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Our Program</span>
              <ul>
                <li>
                  <a href="https://supercampmatrix.co.id/">
                    Bimbel Karantina Masuk PTN
                  </a>
                </li>
                <li>
                  <a href="/bimbel-persiapan-masuk-ui-kki-terbaik">
                    Les Privat SIMAK UI dan KKI
                  </a>
                </li>
                <li>
                  <a href="/les-privat-utbk-terbaik">
                    Les Privat UTBK & SNBT 2026
                  </a>
                </li>
                <li>
                  <a href="/les-privat-sd-smp-sma-terbaik">
                    Les Privat SD SMP SMA
                  </a>
                </li>
                <li>
                  <a href="/les-privat-osn-terbaik">Les Privat OSN, ISO, IMO</a>
                </li>
                <li>
                  <a href="/les-privat-pascasarjana-terbaik">
                    Les Privat Pascasarjana
                  </a>
                </li>
                <li>
                  <a href="/bimbel-persiapan-cpns-terbaik">
                    Les Privat CPNS dan Kedinasan
                  </a>
                </li>

                <li>
                  <a href="/les-privat-mahasiswa-terbaik">
                    Les Privat Mahasiswa
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://lesprivatsbmptn.com/contact-us/">Contact Us</a>
            </li>
            <li>
              <a href="/testimoni-lps">Testimoni</a>
            </li>
          </ul>
        </div>
        <div className="new-footer-section">
          <h3>Chat Us Now</h3>
          <a href={contactData?.link_cta}>
            <img
              loading="lazy"
              src="/images/banner.webp"
              alt="Bimbel Karantina Masuk PTN dan Program Les Privat terbaik untuk UTBK, SIMAK UI, KKI, dan semua jenjang pendidikan."
              className="member-logo-footer-matrix"
            />
          </a>
        </div>
      </div>
      {/* Bagian Copyright */}
      <div className="new-footer-copyright">
        <p>&copy; {currentYear} LPS Education. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterNew;
