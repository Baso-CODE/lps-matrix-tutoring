import { AnimatePresence, motion } from "framer-motion";
import { CircleX, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllContactCS } from "../../api/contact/getAllContactCS";
import "./FloatingCTA.css";

const FloatingCTA = () => {
  const [dataContact, setDataContact] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllContactCS();
        const sortedData = response.data.sort(
          (a, b) => a.display_order - b.display_order,
        );
        setDataContact(sortedData);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setUnreadMessages(1);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="box-float-main">
        <div className="main-parent-wa">
          <label htmlFor="" className="label-cta">
            Klik Untuk Konsultasi!
          </label>
          <button className="btn-float-wa" onClick={handleOpenModal}>
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
              <button className="modal-close-btn" onClick={handleCloseModal}>
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
                {dataContact.map((contact) => (
                  <li key={contact.id} className="contact-item">
                    <a
                      href={contact.link_cta}
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
                            {contact.nama_cs} - {contact.nomor_hp}
                          </span>
                          <span className="contact-role">{"Admin"}</span>
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
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingCTA;
