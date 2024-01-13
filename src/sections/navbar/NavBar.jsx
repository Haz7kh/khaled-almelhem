import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo-shape.svg";
import data from "./data";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { useModalContext } from "../../context/modal-context";

const NavBar = () => {
  const { showModalHandler } = useModalContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 20 pixels
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className={`container nav_container${scrolled ? " scrolled" : ""}`}>
        <div className="nav_logo">
          <a href="index.html">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <button id="theme__icon" onClick={showModalHandler}>
        <WiMoonAltWaningGibbous6 />
      </button>
    </nav>
  );
};

export default NavBar;
