/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Home, BookOpen, Info, Award, BookAIcon } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

import "./BottomNavigationBar.css";

const bottomNavItems = [
  { name: "Home", link: "/", icon: Home, type: "link" },
  {
    name: "Program",
    link: "#",
    icon: BookOpen,
    type: "modal",
    modalType: "program",
  },
  { name: "About Us", link: "/about-us", icon: Info, type: "link" },
  {
    name: "Stories",
    link: "#",
    icon: Award,
    type: "modal",
    modalType: "stories",
  },
  {
    name: "Blog",
    link: "/blog",
    icon: BookAIcon,
    type: "link",
  },
];

function BottomNavigationBar({ onProgramClick, onStoriesClick }) {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleModalClick = (modalType) => {
    if (modalType === "program") {
      onProgramClick();
    } else if (modalType === "stories") {
      onStoriesClick();
    }
  };

  return (
    <nav className="bottom-nav-bar">
      <div className="bottom-nav-container">
        {bottomNavItems.map((item) => {
          const isActive = activeLink === item.link && item.type === "link"; // Hanya aktifkan jika type='link'

          if (item.type === "link") {
            return (
              <Link
                key={item.name}
                to={item.link}
                className={`bottom-nav-item ${isActive ? "active" : ""}`}>
                <item.icon className="bottom-nav-icon" />

                <span className="bottom-nav-text">{item.name}</span>
              </Link>
            );
          } else if (item.type === "modal") {
            return (
              <div
                key={item.name}
                onClick={() => handleModalClick(item.modalType)}
                className="bottom-nav-item">
                <item.icon className="bottom-nav-icon" />

                <span className="bottom-nav-text">{item.name}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </nav>
  );
}

export default BottomNavigationBar;
