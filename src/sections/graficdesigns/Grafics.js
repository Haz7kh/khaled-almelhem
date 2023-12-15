// DesignGrid.js
import React, { useState } from "react";
import designs from "./data";
import "./grafics.css";

const DesignGrid = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const handleDesignClick = (design) => {
    setSelectedDesign(design);
  };

  const closePopup = () => {
    setSelectedDesign(null);
  };

  return (
    <section id="graphic">
      <div className="design-grid">
        <h2 className="title">Graphics Designs</h2>
        <p className="design-description">
          Explore a collection of my graphic design projects below.
        </p>
        <div className="design-items">
          {designs.map((design) => (
            <div key={design.id} className="design-item">
              <div className="img-container">
                <img src={design.image} alt={design.title} />
              </div>
              <div className="button-container">
                <h4 className="design-info">{design.title}</h4>
                <button onClick={() => handleDesignClick(design)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedDesign && (
          <div className="popup" onClick={closePopup}>
            <a
              href={selectedDesign.fullImage} // Add a property fullImage to your data
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={selectedDesign.image} alt={selectedDesign.title} />
            </a>
            <button className="close-button" onClick={closePopup}>
              {/* Use an HTML entity for the "x" character */}
              &#10006;
            </button>
            <div className="popup-info">
              <p className="popup-title">{selectedDesign.title}</p>
              <p className="popup-description">{selectedDesign.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesignGrid;
