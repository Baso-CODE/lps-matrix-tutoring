import { useEffect, useState } from "react";
import NavDescktop from "../NavDescktop/NavDescktop";
import NavMobile from "../NavMobile/NavMobile";

import "./Nav.css";
import { Link } from "react-router-dom";
import { Menus } from "../../../helpers/NavbarMenus/Menus";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const phone = "6285774023474"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Dita%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20tanya%20tentang%20program%20belajar:%0A`;

  const message = `
Kelas : 
Mapel : 
Kurikulum : 
Wilayah : 
`.trim(); // Placeholder untuk pesan yang diinginkan

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

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

          <ul className="desktop-menu">
            {Menus.map((menu) => (
              <NavDescktop menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="auth-menu">
            <a
              href={finalUrl}
              aria-label="sign-in"
              className="sign-in-button"
              target="_blank"
              rel="noopener noreferrer">
              Daftar Sekarang
            </a>{" "}
            <div className="mobile-menu">
              <NavMobile Menus={Menus} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
