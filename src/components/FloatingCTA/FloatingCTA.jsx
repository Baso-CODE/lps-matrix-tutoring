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
  return (
    <div className="box-float-main">
      <div className=" main-parent-wa">
        <label htmlFor="" className="label-cta">
          Chat With Us
        </label>
        <Link
          to={finalUrl}
          className=" parent-btn-wa"
          target="_blank"
          rel="noopener noreferrer">
          <button className=" btn-float-wa">
            <span className=" parent-icon-wa">
              <img
                src="/images/icon-wa.svg"
                alt="Klik untuk langsung terhubung dengan tim Les Privat Masuk PTN yang siap membantu Anda memilih program belajar terbaik sesuai kebutuhan dan wilayah Anda!"
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
