import { Link } from "react-router-dom";

// Import file CSS baru untuk Program Page
import { Menus } from "../../../helpers/NavbarMenus/Menus";
import "./ProgramPage.css";

function ProgramPage() {
  const programMenu = Menus.find((menu) => menu.name === "Program");

  if (!programMenu || !programMenu.subMenu) {
    return (
      <div className="program-page-container fallback">
        <h1 className="program-page-title">Program Kami</h1>
        <p>Tidak ada program yang ditemukan atau data tidak lengkap.</p>
      </div>
    );
  }

  return (
    <div className="program-page-container">
      <h1 className="program-page-title">Daftar Program Kami</h1>
      <p className="program-page-description">
        Pilih program yang sesuai dengan kebutuhan Anda:
      </p>

      <div className="program-cards-grid">
        {programMenu.subMenu.map((subItem) => (
          <Link
            key={subItem.name}
            to={subItem.link}
            className="program-card-link">
            <div className="program-card">
              <div className="program-card-icon-wrapper">
                {subItem.icon && <subItem.icon className="program-card-icon" />}
              </div>
              <h2 className="program-card-title">{subItem.name}</h2>
              <p className="program-card-description">{subItem.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProgramPage;
