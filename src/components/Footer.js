import React from "react";
import SocialMediaAlternate from "./common/SocialMedialAlternate";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p className="text">
        Designed and developed in Manila, Philippines
        <br />
        <span className="attribution">
          Huge thanks to Inter UI for the font
        </span>
      </p>
      <SocialMediaAlternate />
    </footer>
  );
};

export default Footer;
