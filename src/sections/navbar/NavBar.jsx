import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "../../context/modal-context";
const NavBar = () => {
  const { showModalHandler } = useModalContext();
  return (
    <nav>
      <div className="container nav_container">
        <div className="nav_logo">
          <a href="index.html">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="nav_menu"></div>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <button id="theme__icon" onClick={showModalHandler}>
        <IoIosColorPalette />
      </button>
    </nav>
  );
};

export default NavBar;
