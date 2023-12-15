import React, { useEffect } from "react";
import "./header.css";
import ProfileImg from "../../assets/kh3.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header>
      <div className="container header-container">
        <div className="header-profile">
          <img src={ProfileImg} alt="Header portrait" data-aos="fade-up" />
        </div>
        <h3 data-aos="fade-up">Khaled Almelhem</h3>
        <p data-aos="fade-up">
          An Application and Web Developer. I love crafting seamless digital
          experiences through clean code. Let's bring your ideas to life!
        </p>
        <div className="header-cta" data-aos="fade-up">
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
