import React from "react";
import "./Footer.css";
import {Fade, Slide} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="dark-mode footer-text">
          {emoji("Copyright © 2021 AntuHere . All rights reserved")}
        </p>
      </div>
      <Slide right duration={2000}>
        <div className="footer-card-border"></div>
      </Slide>
    </Fade>
  );
}
