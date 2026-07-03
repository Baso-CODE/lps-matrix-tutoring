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

  // Fetch CS data dari API
  const { csData } = useCSData();

  // Get rotating CS (random/weight-based)
  const selectedCS = useRotatingCS(csData);

  // Default fallback jika tidak ada CS data
  const fallbackCS = {
    nama_cs: "Kak Fina",
    nomor_hp: "081311778441",
    link_cta:
      "https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina,%20saya%20tertarik%20dengan%20program%20belajar%20di%20LPS%20Education.%0A%0A%F0%9F%93%96%20Les%20Privat%20SD%20SMP%20SMA%20SIMAK%20UI%20OSN%20MAHASISWA%20CPNS%20%7C%20LPS%20EDUCATION%E2%9C%A8%0Ahttps%3A%2F%2Fapps.lesprivatmasukptn.com",
  };

  // Use selected CS atau fallback
  const contactCS = selectedCS || fallbackCS;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="logo-container">
            <Link to={"/"}>
              <img
                loading="eager"
                src={"/images/LOGO2.webp"}
                alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
                className="logo-nav"
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <ul className="desktop-menu">
            {Menus.map((menu) => (
              <NavDescktop menu={menu} key={menu.name} />
            ))}
          </ul>

          {/* Auth Menu - Rotating CS Button */}
          <div className="auth-menu">
            <a
              href={contactCS.link_cta}
              aria-label="konsultasi-whatsapp"
              className="sign-in-button"
              title={`Hubungi ${contactCS.nama_cs}`}>
              Konsultasi Now
              <img
                src="/images/daftar-sekarang.png"
                alt="Konsultasi sekarang"
                className="button-icon-nav"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
