import { useEffect, useState } from "react";
import NavDescktop from "../NavDescktop/NavDescktop";

import { Link } from "react-router-dom";
import { Menus } from "../../../helpers/NavbarMenus/Menus";
import "./Nav.css";

const Nav = () => {
  // const contactData = useAppSelector(selectContactCsData);
  const [isScrolled, setIsScrolled] = useState(false);

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
              href="https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina,%20saya%20tertarik%20dengan%20program%20belajar%20di%20LPS%20Education.%0A%0A%F0%9F%93%96%20Les%20Privat%20SD%20SMP%20SMA%20SIMAK%20UI%20OSN%20MAHASISWA%20CPNS%20%7C%20LPS%20EDUCATION%E2%9C%A8%0Ahttps%3A%2F%2Fapps.lesprivatmasukptn.com"
              aria-label="sign-in"
              className="sign-in-button">
              Konsultasi
              <img
                src="/images/daftar-sekarang.png"
                alt=""
                className="button-icon-nav"
              />
            </a>
            {/* <div className="mobile-menu">
              <NavMobile Menus={Menus} />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
