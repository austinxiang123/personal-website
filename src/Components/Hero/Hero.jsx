import React from "react";
import "./Hero.css";
import profile_img from "../../assets/headshot2.JPG";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="about" className="hero">
      <img className="headshot" src={profile_img} alt="" />
      <h1>
        I'm <span>Austin Xiang</span>, a student at Brown studying CS-Econ.
      </h1>
      <p>I am from Palo Alto, CA.</p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
