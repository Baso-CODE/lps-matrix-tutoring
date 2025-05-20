import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingCTA.css";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";

const FloatingCTA = () => {
  const contactData = useAppSelector(selectContactCsData);
  // Simulasi jumlah notifikasi pesan masuk
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    setUnreadMessages(1);
  }, []);

  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label htmlFor="" className="label-cta">
          Chat With Us
        </label>
        <Link
          to={contactData?.link_cta}
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
