/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import "./StoriesModal.css";

const StoriesModal = ({ isOpen, onClose, storiesSubMenu }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      return;
    }

    if (shouldRender) {
      setIsClosing(true);

      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRender, onClose]);

  if (!shouldRender) return null;

  const handleClose = () => {
    if (isClosing) return;

    setIsClosing(true);
    onClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`stories-modal-overlay ${
        isClosing ? "stories-modal-fade-out" : ""
      }`}
      onMouseDown={handleOverlayClick}
      role="presentation">
      <div
        className={`stories-modal-content ${
          isClosing ? "stories-modal-slide-down" : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="stories-modal-title">
        <span className="stories-modal-specular" aria-hidden="true" />

        <button
          type="button"
          className="stories-modal-close-button"
          onClick={handleClose}
          aria-label="Tutup stories">
          <X size={18} strokeWidth={2} />
        </button>

        <div className="stories-modal-header">
          <span className="stories-modal-eyebrow">LPS Education</span>

          <h2 id="stories-modal-title" className="stories-modal-title">
            Stories Kami
          </h2>

          <p className="stories-modal-description">
            Lihat cerita, perjalanan, dan pencapaian siswa bersama LPS
            Education.
          </p>
        </div>

        <div className="stories-modal-grid">
          {storiesSubMenu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="stories-modal-item"
              onClick={handleClose}>
              <span
                className="stories-modal-item-specular"
                aria-hidden="true"
              />

              {item.icon && (
                <span className="stories-modal-icon-wrapper">
                  <item.icon className="stories-modal-icon" />
                </span>
              )}

              <div className="stories-modal-text-content">
                <h3 className="stories-modal-item-name">{item.name}</h3>

                {item.desc && (
                  <p className="stories-modal-item-desc">{item.desc}</p>
                )}
              </div>

              <span className="stories-modal-item-arrow" aria-hidden="true">
                ›
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesModal;
