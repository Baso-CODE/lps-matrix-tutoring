/* eslint-disable react/prop-types */
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Award, BookAIcon, BookOpen, Home, Info } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./BottomNavigationBar.css";

const bottomNavItems = [
  {
    name: "Home",
    link: "/",
    icon: Home,
    type: "link",
  },
  {
    name: "Program",
    link: "#",
    icon: BookOpen,
    type: "modal",
    modalType: "program",
  },
  {
    name: "About Us",
    link: "/about-us",
    icon: Info,
    type: "link",
  },
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

const DRAG_THRESHOLD = 6;

function BottomNavigationBar({ onProgramClick, onStoriesClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const containerRef = useRef(null);

  const pointerRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startBubbleX: 0,
    moved: false,
  });

  const suppressClickRef = useRef(false);

  const rawBubbleX = useMotionValue(0);

  /*
   * Spring ini membuat bubble mengikuti jari secara smooth.
   * Kalau ingin bubble lebih "berat seperti air":
   * stiffness diperkecil.
   *
   * Kalau ingin lebih cepat:
   * stiffness diperbesar.
   */
  const bubbleX = useSpring(rawBubbleX, {
    stiffness: 360,
    damping: 32,
    mass: 0.42,
  });

  const activeRouteIndex = useMemo(() => {
    const index = bottomNavItems.findIndex((item) => {
      if (item.type !== "link") return false;

      if (item.link === "/") {
        return location.pathname === "/";
      }

      return location.pathname.startsWith(item.link);
    });

    return index >= 0 ? index : 0;
  }, [location.pathname]);

  const [selectedIndex, setSelectedIndex] = useState(activeRouteIndex);
  const [isDragging, setIsDragging] = useState(false);

  const getMeasurements = () => {
    const container = containerRef.current;

    if (!container) {
      return {
        width: 0,
        slotWidth: 0,
        maxX: 0,
      };
    }

    const width = container.getBoundingClientRect().width;
    const slotWidth = width / bottomNavItems.length;
    const maxX = width - slotWidth;

    return {
      width,
      slotWidth,
      maxX,
    };
  };

  const getBubbleXByIndex = (index) => {
    const { slotWidth } = getMeasurements();

    return slotWidth * index;
  };

  const snapBubbleToIndex = (index) => {
    const targetX = getBubbleXByIndex(index);

    rawBubbleX.set(targetX);
  };

  useEffect(() => {
    setSelectedIndex(activeRouteIndex);

    requestAnimationFrame(() => {
      snapBubbleToIndex(activeRouteIndex);
    });
  }, [activeRouteIndex]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!pointerRef.current.active) {
        snapBubbleToIndex(selectedIndex);
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [selectedIndex]);

  const activateItem = (index) => {
    const item = bottomNavItems[index];

    if (!item) return;

    setSelectedIndex(index);
    snapBubbleToIndex(index);

    if (item.type === "modal") {
      if (item.modalType === "program") {
        onProgramClick?.();
      }

      if (item.modalType === "stories") {
        onStoriesClick?.();
      }

      return;
    }

    if (item.type === "link" && location.pathname !== item.link) {
      navigate(item.link);
    }
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const container = containerRef.current;

    if (!container) return;

    pointerRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startBubbleX: rawBubbleX.get(),
      moved: false,
    };

    try {
      container.setPointerCapture(event.pointerId);
    } catch {
      // Browser tertentu tidak memerlukan pointer capture.
    }

    setIsDragging(false);
  };

  const handlePointerMove = (event) => {
    const pointer = pointerRef.current;

    if (!pointer.active) return;
    if (pointer.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - pointer.startX;
    const deltaY = event.clientY - pointer.startY;

    const horizontalDistance = Math.abs(deltaX);
    const verticalDistance = Math.abs(deltaY);

    if (!pointer.moved && horizontalDistance < DRAG_THRESHOLD) {
      return;
    }

    /*
     * Jika gerakan dominan vertikal, biarkan browser
     * melakukan scroll halaman seperti biasa.
     */
    if (!pointer.moved && verticalDistance > horizontalDistance) {
      return;
    }

    pointer.moved = true;

    if (!isDragging) {
      setIsDragging(true);
    }

    const { slotWidth, maxX } = getMeasurements();

    if (!slotWidth) return;

    const nextX = Math.max(0, Math.min(maxX, pointer.startBubbleX + deltaX));

    /*
     * Bubble bergerak bebas mengikuti jari.
     * Tidak langsung lompat per menu.
     */
    rawBubbleX.set(nextX);

    /*
     * Icon / text aktif berubah ketika bubble
     * melewati posisi menu berikutnya.
     */
    const nearestIndex = Math.max(
      0,
      Math.min(bottomNavItems.length - 1, Math.round(nextX / slotWidth)),
    );

    setSelectedIndex(nearestIndex);
  };

  const finishDrag = (event, shouldActivate = true) => {
    const pointer = pointerRef.current;

    if (!pointer.active) return;

    const wasMoved = pointer.moved;

    pointerRef.current.active = false;

    const { slotWidth } = getMeasurements();

    if (!slotWidth) {
      setIsDragging(false);
      return;
    }

    const currentX = rawBubbleX.get();

    const targetIndex = Math.max(
      0,
      Math.min(bottomNavItems.length - 1, Math.round(currentX / slotWidth)),
    );

    /*
     * Setelah jari dilepas bubble "snap"
     * perlahan ke tengah menu terdekat.
     */
    setSelectedIndex(targetIndex);
    snapBubbleToIndex(targetIndex);

    if (wasMoved) {
      suppressClickRef.current = true;

      if (shouldActivate) {
        activateItem(targetIndex);
      }

      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 80);
    }

    try {
      containerRef.current?.releasePointerCapture(event.pointerId);
    } catch {
      // Abaikan apabila pointer capture sudah dilepas.
    }

    setIsDragging(false);
  };

  const handlePointerUp = (event) => {
    finishDrag(event, true);
  };

  const handlePointerCancel = (event) => {
    finishDrag(event, false);
  };

  const handleClickCapture = (event) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleItemClick = (event, index, item) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      return;
    }

    setSelectedIndex(index);
    snapBubbleToIndex(index);

    if (item.type === "modal") {
      event.preventDefault();

      if (item.modalType === "program") {
        onProgramClick?.();
      }

      if (item.modalType === "stories") {
        onStoriesClick?.();
      }
    }
  };

  return (
    <nav
      className={`bottom-nav-bar ${isDragging ? "bottom-nav-dragging" : ""}`}
      aria-label="Navigasi utama">
      <div
        ref={containerRef}
        className="bottom-nav-container"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onClickCapture={handleClickCapture}>
        <motion.div
          className="bottom-nav-liquid-bubble"
          style={{
            x: bubbleX,
          }}
          aria-hidden="true">
          <span className="bottom-nav-liquid-inner" />

          <span className="bottom-nav-liquid-highlight" />

          <span className="bottom-nav-liquid-glare" />

          <span className="bottom-nav-liquid-refraction" />

          <span className="bottom-nav-liquid-caustic" />
        </motion.div>

        {bottomNavItems.map((item, index) => {
          const isSelected = selectedIndex === index;

          if (item.type === "link") {
            return (
              <Link
                key={item.name}
                to={item.link}
                draggable={false}
                onClick={(event) => handleItemClick(event, index, item)}
                className={`bottom-nav-item ${isSelected ? "active" : ""}`}>
                <item.icon className="bottom-nav-icon" />

                <span className="bottom-nav-text">{item.name}</span>
              </Link>
            );
          }

          return (
            <button
              key={item.name}
              type="button"
              onClick={(event) => handleItemClick(event, index, item)}
              className={`bottom-nav-item ${isSelected ? "active" : ""}`}>
              <item.icon className="bottom-nav-icon" />

              <span className="bottom-nav-text">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigationBar;
