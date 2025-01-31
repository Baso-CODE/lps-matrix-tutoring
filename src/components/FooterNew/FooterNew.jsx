import "./FooterNew.css";
import { Link } from "react-router-dom";
const FooterNew = () => {
  // Data admin
  const admins = [
    {
      name: "Kak Lin",
      phone: "6282258689993",
    },
    {
      name: "Kak Rosa",
      phone: "6285887562039",
    },
  ];

  // Function untuk membuat URL WhatsApp
  const generateWhatsAppUrl = (phone, name) => {
    const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20${encodeURIComponent(
      name
    )}%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20bertanya%20program%20belajar%20untuk:%0A`;

    const message = `Kelas : \nMapel : \nKurikulum : \nWilayah : `.trim();

    return `${baseUrl}${encodeURIComponent(message)}`;
  };

  // image cta
  const phone = "6282134093567"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Ulya%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20bertanya%20program%20belajar%20untuk:%0A`;

  const message = `
Kelas: [Isi Kelas]
Mapel: [Isi Mapel]
Kurikulum: [Isi Kurikulum]
Wilayah: [Isi Wilayah]
  `.trim(); // Placeholder untuk pesan yang diinginkan

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

  const currentYear = new Date().getFullYear();
  return (
    <footer className="new-footer">
      <div className="new-footer-section">
        <h3>Les Privat SBMPTN</h3>

        <h4>PRIVAT Spesialis Masuk PTN</h4>
        <ul>
          <li>- Guru Privat ke Rumah</li>
          <li>- Les Privat ONLINE</li>
        </ul>

        <h4>OFFICE</h4>
        <p className="new-footer-section-alamat">
          Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat (Lingkungan
          Pendidikan UI)
        </p>

        <h4>TELEPON KANTOR:</h4>
        <p className="new-footer-section-alamat">021-2761-2993</p>

        <h4>KONSULTASI PROGRAM:</h4>
        <ul>
          {admins.map((admin, index) => (
            <li key={index}>
              <Link
                to={generateWhatsAppUrl(admin.phone, admin.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="admin-link">
                <span className="admin-name">{admin.name}:</span> {admin.phone}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="new-footer-section">
        <h3>Bimbel LPS</h3>
        <p className="new-footer-section-description">
          Bimbel LPS (ONLINE & OFFLINE) adalah lembaga les privat khusus masuk
          PTN Favorit (UI ITB UGM IPB Unpad & PTN terbaik lainnya). Program
          belajar didesain secara sistematis, terstruktur, terukur dan teruji.
        </p>
        <p className="new-footer-section-description">
          Pembelajaran Tematik berdasar Statistik Soal yang diujikan. Kami siap
          membantu meraih Jurusan Impian di PTN Favorit. Pastikan pilih partner
          terbaik untuk kesuksesan dan masa depanmu.
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
                  Les Privat UTBK & SNBT 2025
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
                <a href="/les-privat-mahasiswa-terbaik">Les Privat Mahasiswa</a>
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
        <h3>Member of:</h3>
        <img
          src="/images/footer/hilpi.jpg"
          alt="Hilpi, Himpunan Lembaga Pendidikan dan Pelatihan Indonesia, member of Matrix Bimbel and Les Privat Program"
          className="member-logo-footer-matrix"
        />
        <p className="new-footer-section-alamat">
          Pilih yang terbaik untuk masa depan dan kesuksesanmu.
        </p>
        <a href={finalUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/banner.webp"
            alt="Bimbel Karantina Masuk PTN dan Program Les Privat terbaik untuk UTBK, SIMAK UI, KKI, dan semua jenjang pendidikan."
            className="member-logo-footer-matrix"
          />
        </a>
      </div>
      {/* Bagian Copyright */}
      <div className="new-footer-copyright">
        <p>&copy; {currentYear} Bimbel LPS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterNew;
