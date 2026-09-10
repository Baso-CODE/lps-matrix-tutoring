import { AnimatePresence, motion } from "framer-motion";
import { CircleX, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import "./FloatingCTA.css";

const DUMMY_CONTACTS = [
  { id: 1, name: "Kak Fani", phone: "6282258689993", role: "Admin" },
  { id: 2, name: "Kak Ririn", phone: "6285774023474", role: "Admin" },
  { id: 3, name: "Kak Fina", phone: "6281311778441", role: "Admin" },
];

const FloatingCTA = () => {
  const [dataContact] = useState(DUMMY_CONTACTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    setUnreadMessages(1);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setUnreadMessages(0);
  };

  return (
    <div className="floating-cta-lps">
      <div className="floating-cta-trigger">
        <div className="floating-cta-label">
          <span className="floating-cta-label-specular" aria-hidden="true" />
          Klik Untuk Konsultasi!
        </div>

        <button
          type="button"
          className="floating-cta-wa-button"
          onClick={handleOpenModal}
          aria-label="Buka konsultasi WhatsApp">
          <span className="floating-cta-button-specular" aria-hidden="true" />

          <span className="floating-cta-icon-wrapper">
            {unreadMessages > 0 && (
              <span className="floating-cta-notif-badge">{unreadMessages}</span>
            )}

            <img
              loading="lazy"
              src="/images/icon-wa.svg"
              alt=""
              aria-hidden="true"
              className="floating-cta-wa-icon"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="floating-cta-modal"
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.97,
            }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}>
            <span className="floating-cta-modal-specular" aria-hidden="true" />

            <button
              type="button"
              className="floating-cta-close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Tutup konsultasi WhatsApp">
              <CircleX />
            </button>

            <div className="floating-cta-modal-header">
              <div className="floating-cta-header-icon">
                <PhoneCall />
              </div>

              <div className="floating-cta-title-group">
                <h3 className="floating-cta-modal-title">
                  Start a Conversation
                </h3>

                <p className="floating-cta-modal-subtitle">
                  Hi! Click one of our member below to chat on WhatsApp
                </p>
              </div>
            </div>

            <p className="floating-cta-waiting-time">
              The team typically replies in a few minutes.
            </p>

            <ul className="floating-cta-contact-list">
              {dataContact.map((contact) => {
                const waLink = `https://wa.me/${contact.phone}?text=Halo%20${encodeURIComponent(
                  contact.name,
                )},%20saya%20ingin%20konsultasi%20mengenai%20les%20privat.`;

                return (
                  <li key={contact.id} className="floating-cta-contact-item">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="floating-cta-contact-link">
                      <span
                        className="floating-cta-contact-specular"
                        aria-hidden="true"
                      />

                      <div className="floating-cta-contact-info">
                        <div className="floating-cta-admin-icon-wrapper">
                          <img
                            src="/images/icon-wa-admin-detail.png"
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="floating-cta-contact-wa-icon"
                          />
                        </div>

                        <div className="floating-cta-contact-details">
                          <span className="floating-cta-contact-name">
                            {contact.name}
                          </span>

                          <span className="floating-cta-contact-phone">
                            {contact.phone}
                          </span>

                          <span className="floating-cta-contact-role">
                            {contact.role}
                          </span>
                        </div>
                      </div>

                      <div className="floating-cta-right-icon-wrapper">
                        <img
                          src="/images/whatsapp-icon-right.png"
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="floating-cta-contact-icon-right"
                        />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCTA;
