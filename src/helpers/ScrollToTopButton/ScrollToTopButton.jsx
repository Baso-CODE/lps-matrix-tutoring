import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="scroll-to-top-button"
      aria-label="Kembali ke bagian atas halaman"
      title="Kembali ke atas">
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
