// src/components/Nav/Nav.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menus } from "../../../helpers/NavbarMenus/Menus";
import { useCSData } from "../../../hooks/useCSData";
import { useRotatingCS } from "../../../hooks/useRotatingCS";
import NavDescktop from "../NavDescktop/NavDescktop";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { csData } = useCSData();
  const { selectedCS, rotateToNext } = useRotatingCS(csData);

  const fallbackCS = {
    nama_cs: "Kak Fina",
    nomor_hp: "081311778441",
    link_cta:
      "https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina,%20saya%20tertarik%20dengan%20program%20belajar%20di%20LPS%20Education.%0A%0A%F0%9F%93%96%20Les%20Privat%20SD%20SMP%20SMA%20SIMAK%20UI%20OSN%20MAHASISWA%20CPNS%20%7C%20LPS%20EDUCATION%E2%9C%A8%0Ahttps%3A%2F%2Fapps.lesprivatmasukptn.com",
  };

  const contactCS = selectedCS || fallbackCS;

  const handleClick = () => {
    rotateToNext();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="main-navbar">
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" aria-label="LPS Education">
              <img
                loading="eager"
                src="/images/LOGO2.webp"
                alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
                className="logo-nav"
                width={673}
                height={371}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="desktop-menu">
            {Menus.map((menu) => (
              <NavDescktop menu={menu} key={menu.name} />
            ))}
          </ul>

          {/* Rotating CS */}
          <div className="auth-menu">
            <a
              href={contactCS.link_cta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Konsultasi WhatsApp dengan ${contactCS.nama_cs}`}
              className="sign-in-button"
              title={`Hubungi ${contactCS.nama_cs}`}
              onClick={handleClick}>
              <span className="sign-in-reflection" aria-hidden="true" />

              <span className="sign-in-text">Konsultasi Now</span>

              <span className="sign-in-icon-wrapper">
                <img
                  src="/images/daftar-sekarang.webp"
                  alt=""
                  aria-hidden="true"
                  width={512}
                  height={512}
                  className="button-icon-nav"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
