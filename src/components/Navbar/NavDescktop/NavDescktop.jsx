/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavDescktop.css";

export default function NavDescktop({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      display: "block",
      transition: {
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1],
      },
    },

    exit: {
      opacity: 0,
      y: 7,
      scale: 0.985,
      rotateX: -7,
      transition: {
        duration: 0.18,
        ease: "easeIn",
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = Boolean(menu?.subMenu?.length);

  const isActive =
    menu?.link === "/"
      ? location.pathname === "/"
      : menu?.link && location.pathname.startsWith(menu.link);

  return (
    <motion.li
      className="menu-item"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}>
      <Link
        to={menu.link || "#"}
        className={`menu-link ${isActive ? "active" : ""}`}>
        <span className="menu-link-text">{menu.name}</span>

        {hasSubMenu && (
          <ChevronDown
            strokeWidth={2}
            className={`chevron-icon ${isHover ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className={`sub-menu ${
            menu.gridCols === 3
              ? "sub-menu-cols-3"
              : menu.gridCols === 2
                ? "sub-menu-cols-2"
                : "sub-menu-cols-1"
          }`}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}>
          <span className="submenu-specular" aria-hidden="true" />

          <div
            className={`submenu-grid ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            }`}>
            {menu.subMenu.map((submenu, i) => (
              <div className="menu-box" key={submenu.name || i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="menu-heading">{menu.subMenuHeading[i]}</p>
                )}

                <Link to={submenu.link} className="menu-content">
                  {submenu.icon && (
                    <div className="icon-box">
                      <submenu.icon />
                    </div>
                  )}

                  <div className="submenu-content-text">
                    <div className="submenu-name">{submenu.name}</div>

                    {submenu.desc && (
                      <p className="submenu-desc">{submenu.desc}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
