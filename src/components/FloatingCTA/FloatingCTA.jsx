import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./FloatingCTA.css";

const FloatingCTA = () => {
  const contactData = useAppSelector(selectContactCsData);

  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    setUnreadMessages(1);
  }, []);

  // const handleCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";
  //   handleCTAClickLogic(targetUrl, e);
  // };

  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label htmlFor="" className="label-cta">
          Chat With Us
        </label>
        <Link className="parent-btn-wa" to={contactData?.link_cta}>
          <button className="btn-float-wa">
            <span className="parent-icon-wa relative">
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
