import React from "react";
import "./navbar.css";
import Logo from "../../assets/IMG_2412.png";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";

const NavBar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon">
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;