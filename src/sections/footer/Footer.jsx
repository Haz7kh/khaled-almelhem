import React from "react";
import { links, socials } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <ul className="nav-menu">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}>{fLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer-socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-copyright">
        <small>
          {" "}
          <div>
            &copy; {new Date().getFullYear()} Khaled Almelhem Portfolio. All
            rights reserved.
          </div>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
