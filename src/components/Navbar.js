import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive(active === "" ? "link-active" : "");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="title">
        EJ
      </Link>
      <div className="linkset">
        <Link to="/" className={`link ${setActive}`} onClick={handleClick}>
          Home
        </Link>
        <Link to="/showcase" className="link" onClick={handleClick}>
          Showcase
        </Link>
        <Link to="/exercise" className="link" onClick={handleClick}>
          Exercise
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
