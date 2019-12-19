import React from "react";
import SocialMedia from "./common/SocialMedia";

const HomeBody = () => {
  return (
    <div className="container">
      <div className="formatted-content -lead">
        <h6 className="heading">EJ Llovido</h6>
        <p className="body">
          I'm a self taught developer.
          <br />I work hard and smart to achieve personal growth and the
          company's goals.
        </p>
      </div>
      <div className="formatted-content">
        <h6 className="heading">Work</h6>
        <p className="body">
          Website Builder at Luxury Presence.
          <br />
          I'm in charge on building the front-end using JSON.
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
