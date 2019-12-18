import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="title">
        EJ
      </Link>
      <div className="linkset">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/showcase" className="link">
          Showcase
        </Link>
        <Link to="/exercise" className="link">
          Exercise
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
