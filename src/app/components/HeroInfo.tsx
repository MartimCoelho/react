import React from "react";
import "../page.module.css";
const HeroInfo: React.FC<{ name: string; img: string }> = ({ name, img }) => {
  return (
    <div className="hero-box">
      <img src={img} alt={name} className="hero-image" />
      <h4 className="hero-name">{name}</h4>
    </div>
  );
};
export default HeroInfo;
