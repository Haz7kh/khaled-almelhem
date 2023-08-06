import React from "react";
import "./services.css";
import data from "./data";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container  services-container" data-aos="fade-up">
        {data.map((card) => (
          <Card key={card.id} className="service light">
            <div className="service-icon">{card.icon}</div>
            <div className="service-details">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
