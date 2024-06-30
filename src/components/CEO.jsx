import React from 'react';
import './CEO.css';
import samprus from "../assets/sampresh.png"
import mano from "../assets/mano.png"

const ceoData = [
  {
    name: 'A.Arul Samprus',
    degree: 'B.E Civil Engineering',
    image: samprus,
  },
  {
    name: 'R.Masanam Mano',
    degree: 'B.E Civil Engineering',
    image: mano,
  },
];

const CEO = () => {
  return (
    <div className="ceo-section">
      <h2 className="ceo-heading">Meet Our CEOs</h2>
      <p className="ceo-subheading">
        Our leadership is committed to delivering the highest quality and innovation in all our projects.
      </p>
      <div className="ceo-container">
        {ceoData.map((ceo, index) => (
          <div key={index} className="ceo-card">
            <div className="ceo-image-container">
              <img src={ceo.image} alt={ceo.name} className="ceo-image" />
              <div className="ceo-overlay">
                <div className="ceo-overlay-text">
                  <h3 className="ceo-name">{ceo.name}</h3>
                  <p className="ceo-degree">{ceo.degree}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CEO;
