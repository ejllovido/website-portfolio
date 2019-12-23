import React from "react";
import SocialMedia from "./common/SocialMedia";

const HomeBody = () => {
  return (
    <div className="container">
      <div className="formatted-content -lead">
        <h6 className="heading">EJ Llovido</h6>
        <p className="body">
          I'm an aspiring front-end developer looking to build amazing software.
        </p>
      </div>
      <div className="formatted-content">
        <h6 className="heading">Work</h6>
        <p className="body">
          Currently working as Website Builder at Luxury Presence. I'm in charge
          of configuring and building websites using JSON.
        </p>
      </div>
      <div className="formatted-content">
        <h6 className="heading">Elsewhere</h6>
        <SocialMedia />
      </div>
    </div>
  );
};

export default HomeBody;
