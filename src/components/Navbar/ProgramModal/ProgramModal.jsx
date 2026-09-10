/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import "./ProgramModal.css";

function ProgramModal({ isOpen, onClose, programSubMenu }) {
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
      className={`program-modal-overlay ${isClosing ? "fade-out" : ""}`}
      onMouseDown={handleOverlayClick}
      role="presentation">
      <div
        className={`program-modal-content ${isClosing ? "slide-down" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="program-modal-title">
        <span className="program-modal-specular" aria-hidden="true" />

        <button
          type="button"
          className="program-modal-close-button"
          onClick={handleClose}
          aria-label="Tutup pilihan program">
          <X size={18} strokeWidth={2} />
        </button>

        <div className="program-modal-header">
          <span className="program-modal-eyebrow">LPS Education</span>

          <h2 id="program-modal-title" className="program-modal-title">
            Pilih Program
          </h2>

          <p className="program-modal-description">
            Pilih program belajar yang sesuai dengan kebutuhanmu.
          </p>
        </div>

        <div className="program-modal-list">
          {programSubMenu.map((subItem) => {
            const isExternal = subItem.link.startsWith("http");

            return (
              <a
                key={subItem.name}
                href={subItem.link}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="program-modal-item"
                onClick={handleClose}>
                <span
                  className="program-modal-item-specular"
                  aria-hidden="true"
                />

                {subItem.icon && (
                  <span className="program-modal-icon-wrapper">
                    <subItem.icon className="program-modal-item-icon" />
                  </span>
                )}

                <div className="program-modal-item-text-wrapper">
                  <span className="program-modal-item-name">
                    {subItem.name}
                  </span>

                  {subItem.desc && (
                    <span className="program-modal-item-desc">
                      {subItem.desc}
                    </span>
                  )}
                </div>

                <span className="program-modal-item-arrow" aria-hidden="true">
                  ›
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgramModal;
