/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./FomoTicker.css";

export default function FomoTicker({ namaWilayah, namaProgram }) {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isClosedByUser, setIsClosedByUser] = useState(false);

  const generateRandomNotification = () => {
    const defaultSubjects = [
      "UTBK SNBT",
      "CPNS & Kedinasan",
      "Simak UI & KKI",
      "Mahasiswa",
      "SD SMP SMA",
      "Pascasarjana",
      "OSN ISMO IMO",
      "TKA",
    ];

    const levels = ["SD", "SMP", "SMA"];
    const times = [
      "Baru saja",
      "15 menit lalu",
      "1 jam lalu",
      "2 jam lalu",
      "Hari ini",
    ];

    const programTujuan =
      namaProgram ||
      defaultSubjects[Math.floor(Math.random() * defaultSubjects.length)];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    const isRegistration = Math.random() > 0.3;

    if (isRegistration) {
      return {
        type: "registration",
        title: "Pendaftaran Baru 🔥",
        message: `Siswa ${randomLevel} dari wilayah ${namaWilayah} baru saja mendaftar Les Privat ${programTujuan}.`,
        time: randomTime,
      };
    } else {
      const sisaKuota = Math.floor(Math.random() * 3) + 1;
      return {
        type: "alert",
        title: "Peringatan Kuota ⚠️",
        message: `Sisa kuota tutor ${programTujuan} untuk wilayah ${namaWilayah} bulan ini hanya tersisa ${sisaKuota} slot!`,
        time: "Saat ini",
      };
    }
  };

  const playNotificationSound = () => {
    try {
      const audio = new Audio("/sounds/notification.mp3");
      audio.volume = 0.4;
      audio.play().catch((e) => console.warn("Audio blocked:", e.message));
    } catch (err) {
      console.error("Audio error:", err);
    }
  };

  useEffect(() => {
    if (isClosedByUser) return;

    const runTickerCycle = () => {
      setNotification(generateRandomNotification());
      setIsVisible(true);
      playNotificationSound();
      setTimeout(() => setIsVisible(false), 5000);
    };

    const initialTimeout = setTimeout(runTickerCycle, 3000);
    const interval = setInterval(runTickerCycle, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [namaWilayah, namaProgram, isClosedByUser]);

  if (isClosedByUser || !notification) return null;

  return (
    <div className="fomo-ticker-container">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fomo-card">
            <div
              className={`indicator-bar ${notification.type === "alert" ? "indicator-alert" : "indicator-registration"}`}
            />

            <div className="fomo-content-wrapper">
              <div
                className={`icon-wrapper ${notification.type === "alert" ? "icon-alert" : "icon-registration"}`}>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  {notification.type === "alert" ? (
                    <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                  ) : (
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  )}
                </svg>
              </div>

              <div className="fomo-text-content">
                <p className="fomo-title">{notification.title}</p>
                <p className="fomo-message">{notification.message}</p>
                <p className="fomo-time">{notification.time}</p>
              </div>

              <button
                onClick={() => setIsClosedByUser(true)}
                className="close-btn"
                aria-label="Close">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

FomoTicker.propTypes = {
  namaWilayah: PropTypes.string,
  namaProgram: PropTypes.string,
};
