import React from "react";
import "./floating-nav.css";
import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-500}
        className="scrollspy"
        items={[
          "header",
          "about",
          "services",
          "portfolio",
          "graphic",
          "contact",
        ]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
