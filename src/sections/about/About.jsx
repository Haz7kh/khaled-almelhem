import React, { useState } from "react";
import "./about.css";
import AboutImg from "../../assets/svg-logo.svg";
import CV from "../../assets/khcv.pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
import data from "./data";
import Card from "../../components/Card";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" data-aos="fade-in">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-portrait">
            <img src={AboutImg} alt="AboutImg" />
          </div>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <div className="about-cards">
            {data.map((card) => (
              <Card key={card.id} className="about-card">
                <span className="about-card-icon">{card.icon}</span>
                <h5>{card.title}</h5>
                <small>{card.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            👋 I'm a passionate applications/web developer with a strong focus
            on creating engaging and user-friendly digital experiences. My
            journey into the world of web development began with an insatiable
            curiosity for crafting interactive and dynamic websites and
            applications. My development toolkit includes a wide array of modern
            technologies. I'm well-versed in using React and React Native to
            build responsive and intuitive user interfaces for web and mobile
            platforms. In addition, I have hands-on experience with Kotlin for
            Android app development, allowing me to create impactful and
            efficient native Android applications...
            {showMore ? (
              <>
                As a backend enthusiast, I work with Node.js and MongoDB to
                architect scalable and robust server-side applications. I'm also
                familiar with Firebase, leveraging its real-time database and
                authentication services to enhance the user experience of my
                projects. Besides being a developer, I possess a creative side
                as well. I enjoy exploring graphic design, including crafting
                unique logos and engaging videos... Whether it's photo editing
                or video manipulation, I love adding an artistic touch to my
                projects. Having worked with WordPress extensively, I can
                confidently navigate its ecosystem to create captivating and
                content-rich websites. My experience with WordPress enables me
                to customize themes, develop plugins, and optimize performance
                for seamless user experiences. I thrive in collaborative
                environments and cherish the opportunity to learn from and
                contribute to a team of like-minded developers. I believe in
                constant growth and continuously push myself to stay updated
                with the latest industry trends and best practices. When I'm not
                immersed in code, you can find me honing my design skills,
                exploring new technologies, or enjoying the great outdoors. I'm
                always excited to take on new challenges and embark on
                innovative projects that make a positive impact on people's
                lives. If you have any exciting projects or opportunities, let's
                connect! I'm eager to share my passion for development and
                design and bring your ideas to life. Let's build something
                amazing together! 🚀
              </>
            ) : null}
            <span className="read-more" onClick={toggleShowMore}>
              {showMore ? (
                <button className="btn-read"> Read Less</button>
              ) : (
                <button className="btn-read"> Read More </button>
              )}
            </span>
          </p>
          <a href={CV} download className="btn primary">
            {" "}
            Download CV
            <AiOutlineCloudDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
