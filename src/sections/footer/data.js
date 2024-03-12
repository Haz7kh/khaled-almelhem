import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.instagram.com/kh.m7i/",
    icon: <AiOutlineInstagram />,
  },
  {
    id: 2,
    link: "https://twitter.com/Khaled38046521",
    icon: <AiOutlineTwitter />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/khaled-almelhem-2bb056222/",
    icon: <AiOutlineLinkedin />,
  },
  { id: 4, link: "https://github.com/Haz7kh", icon: <AiFillGithub /> },
];
