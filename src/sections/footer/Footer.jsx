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
        <small>2023 Khaled Almelhem Portfolio &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
