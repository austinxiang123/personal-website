import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo2.JPG";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={footer_logo} alt="" className="logo" />
            <p>I'm Austin Xiang, a student at Brown studying CS-Econ.</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
            <hr />
          </div>
        </div>
        <div className="footer-bottom"></div>
        <p className="footer-bottom-left">
          © 2024 Austin Xiang. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
