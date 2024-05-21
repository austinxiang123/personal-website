import React from "react";
import "./About.css";
import about_photo from "../../assets/aboutphoto.JPG";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_photo} className="about-photo" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a rising junior at Brown and an aspiring software engineer.{" "}
            </p>
            <p>
              I hope to utilize my technical skills to make the world a better
              place. Check out some of my skills below!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C++</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML/CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr></hr>
        <div className="about-achievement">
          <h1>4.0</h1>
          <p>GPA</p>
        </div>
        <hr></hr>
        <div className="about-achievement">
          <h1>1590</h1>
          <p>SAT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
