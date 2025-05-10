import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FloatingCTA.css";

const FloatingCTA = () => {
  const phone = "6285774023474"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Silvi%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20tanya%20program%20belajar%20untuk:%0A`;

  const message = `
  Kelas : 
  Mapel : 
  Kurikulum : 
  Wilayah : 
`.trim(); // Placeholder untuk pesan yang diinginkan

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

  // Simulasi jumlah notifikasi pesan masuk
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    // Simulasi jumlah chat masuk (bisa diganti dengan API jika ada)
    setUnreadMessages(3); // Ganti angka sesuai kebutuhan
  }, []);

  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label htmlFor="" className="label-cta">
          Chat With Us
        </label>
        <Link
          to={finalUrl}
          className="parent-btn-wa"
          target="_blank"
          rel="noopener noreferrer">
          <button className="btn-float-wa">
            <span className="parent-icon-wa relative">
              {/* Badge Notifikasi */}
              {unreadMessages > 0 && (
                <span className="notif-badge">{unreadMessages}</span>
              )}
              <img
                loading="lazy"
                src="/images/icon-wa.svg"
                alt="Klik untuk langsung terhubung dengan tim Les Privat Masuk PTN!"
                className="icon-wa"
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FloatingCTA;
