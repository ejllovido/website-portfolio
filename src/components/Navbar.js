import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="title">
        EJ
      </Link>
      <div className="linkset">
        <NavLink
          exact
          to="/"
          className="link"
          activeStyle={{
            fontWeight: "bold",
            color: "#1d3a57"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/showcase"
          className="link"
          activeStyle={{
            fontWeight: "bold",
            color: "#1d3a57"
          }}
        >
          Showcase
        </NavLink>
        <NavLink
          to="/exercise"
          className="link"
          activeStyle={{
            fontWeight: "bold",
            color: "#1d3a57"
          }}
        >
          Exercise
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
