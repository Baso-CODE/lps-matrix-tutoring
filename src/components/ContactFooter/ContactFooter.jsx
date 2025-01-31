import { Link } from "react-router-dom";
import "./ContactFooter.css";

const ContactFooter = () => {
  const contacts = [
    { phone: "6285774023474", label: "0857-7402-3474", name: "Kak Dita" },

    { phone: "6281311778441", label: "0813-1177-8441", name: "Kak Fina" },

    { phone: "6282134093567", label: "0821-3409-3567", name: "Kak Ulya" },
  ];

  const generateWhatsAppUrl = (phone, name) => {
    const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20${encodeURIComponent(
      name
    )}%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20bertanya%20program%20belajar%20untuk:%0A`;

    const message = `Kelas : \nMapel : \nKurikulum : \nWilayah : `.trim();

    return `${baseUrl}${encodeURIComponent(message)}`;
  };
  return (
    <div className="contact-section">
      <h2 className="contact-heading">
        Pastikan belajarmu tertarget, dengan guru les privat yang kompeten,
        didampingi oleh tim konsultan yang berpengalaman.
      </h2>
      <p className="contact-info">
        Untuk informasi lebih lengkap, silakan hubungi:
      </p>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index}>
            <Link
              to={generateWhatsAppUrl(contact.phone, contact.name)}
              target="_blank"
              rel="noopener noreferrer">
              {contact.label} (CALL/WA)
            </Link>
          </li>
        ))}
      </ul>
      <p className="contact-commitment">
        Komitmen kami yaitu siswa dapat meraih Jurusan sesuai Target. Kami siap
        memberikan yang Terbaik!
      </p>
    </div>
  );
};

export default ContactFooter;
