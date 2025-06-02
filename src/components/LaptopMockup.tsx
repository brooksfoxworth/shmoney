import React from 'react';
import './LaptopMockup.css';

const LaptopMockup: React.FC = () => {
  return (
    <div className="laptop-mockup">
      <img 
        src="/assets/images/laptop mockup.png" 
        alt="Laptop displaying VLN interface" 
        className="laptop-frame"
      />
      <div className="laptop-screen-overlay">
        <img 
          src="/assets/images/vln test screenshot.png"
          alt="VLN interface screenshot"
          className="laptop-screen-content"
        />
      </div>
    </div>
  );
};

export default LaptopMockup; 