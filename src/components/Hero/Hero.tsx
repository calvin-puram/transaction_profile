import React from "react";
import "./Hero.css";

import HeroImg from "./assets/heroBg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__subWrapper">
        <div className="hero__content">
          <h1 className="hero__header">
            E-commerce transaction details{" "}
            <span className="hero__header-sub">curated just for you</span>
          </h1>
          <p className="hero__lead">
            The easiest way to manage{" "}
            <span className="hero__header-sub">
              customers transaction information
            </span>
          </p>
        </div>

        <img src={HeroImg} alt="icon" className="hero__img" />
      </div>
    </div>
  );
};

export default Hero;
