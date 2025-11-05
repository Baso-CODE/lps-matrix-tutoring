/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./StoriesModal.css";

const StoriesModal = ({ isOpen, onClose, storiesSubMenu }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);

      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Sesuaikan dengan durasi animasi CSS (0.3s)
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleClose = () => {
    setIsClosing(true);
    onClose();
  };

  return (
    <div className={`program-modal-overlay ${isClosing ? "fade-out" : ""}`}>
      <div
        className={`program-modal-content ${isClosing ? "slide-down" : ""}`}
        onClick={(e) => e.stopPropagation()}>
        <button className="program-modal-close-button" onClick={handleClose}>
          &times;
        </button>
        <h2 className="program-modal-title">Stories Kami</h2>
        <div className="program-modal-grid">
          {storiesSubMenu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="program-modal-item"
              onClick={handleClose}>
              <item.icon className="program-modal-icon" />
              <div className="program-modal-text-content">
                <h2 className="program-modal-item-name">{item.name}</h2>
                <p className="program-modal-item-desc">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesModal;
