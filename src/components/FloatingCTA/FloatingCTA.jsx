import { AnimatePresence, motion } from "framer-motion";
import { CircleX, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import "./FloatingCTA.css";

// Data statis contact CS
const DUMMY_CONTACTS = [
  { id: 1, name: "Kak Nia", phone: "6282258689993", role: "Admin" },
  { id: 2, name: "Kak Fani", phone: "6285774023474", role: "Admin" },
  { id: 3, name: "Kak Fina", phone: "6281311778441", role: "Admin" },
];

const FloatingCTA = () => {
  const [dataContact] = useState(DUMMY_CONTACTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    setUnreadMessages(1);
  }, []);

  return (
    <>
      <div className="box-float-main">
        <div className="main-parent-wa">
          <label htmlFor="" className="label-cta">
            Klik Untuk Konsultasi!
          </label>
          <button className="btn-float-wa" onClick={() => setIsModalOpen(true)}>
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
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}>
                <CircleX />
              </button>
              <div className="modal-header">
                <div className="modal-header-icon">
                  <PhoneCall />
                </div>
                <div className="modal-title-group">
                  <h3 className="modal-title-chat">Start a Conversation</h3>
                  <p className="modal-subtitle">
                    Hi! Click one of our member below to chat on WhatsApp
                  </p>
                </div>
              </div>
              <p className="modal-waiting-time">
                The team typically replies in a few minutes.
              </p>
              <ul className="contact-list">
                {dataContact.map((contact) => {
                  // Format link WhatsApp secara otomatis berdasarkan nomor handphone
                  const waLink = `https://wa.me/${contact.phone}?text=Halo%20${encodeURIComponent(contact.name)},%20saya%20ingin%20konsultasi%20mengenai%20les%20privat.`;

                  return (
                    <li key={contact.id} className="contact-item">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link">
                        <div className="contact-info">
                          <img
                            src="/images/icon-wa-admin-detail.png"
                            alt="WhatsApp Icon"
                            loading="lazy"
                            className="contact-wa-icon"
                          />
                          <div className="contact-details">
                            <span className="contact-name">
                              {contact.name} - {contact.phone}
                            </span>
                            <span className="contact-role">{contact.role}</span>
                          </div>
                        </div>
                        <img
                          src="/images/whatsapp-icon-right.png"
                          alt="WhatsApp Icon"
                          loading="lazy"
                          className="contact-icon-right"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingCTA;
