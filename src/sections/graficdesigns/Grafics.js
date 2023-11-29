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
        <h2>Graphics Designs</h2>
        <p className="design-description">
          Explore a collection of my graphic design projects below.
        </p>
        <div className="design-items">
          {designs.map((design) => (
            <div key={design.id} className="design-item">
              <img src={design.image} alt={design.title} />

              <div className="design-info">
                <p className="design-title">{design.title}</p>
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
