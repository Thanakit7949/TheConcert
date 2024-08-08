import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>THE CONCERT</h1>
      <div className="tabs">
        <button className="tab active">คอนเสิร์ต</button>
        <button className="tab">ไนท์คลับ</button>
        <button className="tab">กีฬา</button>
      </div>
    </div>
  );
};

export default HeroSection;
