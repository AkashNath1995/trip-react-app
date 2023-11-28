// Hero.js
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img
        src="https://cdn.pixabay.com/photo/2018/11/30/13/33/northern-lights-3847784_1280.jpg"
        alt="HeroImg"
      />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Link to="/travel-plan" className={props.btnClass}>
          {props.buttonText}
        </Link>
      </div>
    </div>
  );
}

export default Hero;
