import React from "react";
import "./header.css";
import ProfileImg from "../../assets/khhaz.jpg";
import data from "./data";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="header-profile">
          <img src={ProfileImg} alt="Header portrait" />
        </div>
        <h3>Khaled Almelhem</h3>
        <p>
          An Application and Web Developer. I love crafting seamless digital
          experiences through clean code. Let's bring your ideas to life!
        </p>
        <div className="header-cta">
          <a href="#contact" className="btn primary">
            {" "}
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            {" "}
            My Work
          </a>
        </div>
        <div className="header-socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
