import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi"; // Tetap gunakan react-icons untuk kemudahan ikon

// Import file CSS yang baru dibuat
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // fungsi untuk mengulir ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisability = () => {
    // Tombol akan muncul jika halaman di-scroll lebih dari 300px
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener saat komponen dimuat
    window.addEventListener("scroll", toggleVisability);

    // Bersihkan event listener saat komponen dilepas (unmount)
    return () => {
      window.removeEventListener("scroll", toggleVisability);
    };
  }, []); // Array kosong berarti efek ini hanya berjalan sekali setelah render pertama

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top-button"
          aria-label="Kembali ke bagian atas halaman"
          title="Kembali ke atas">
          <FiArrowUp size={24} aria-hidden="true" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
