import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavBar: React.FC = () => {
  return (
    <nav className="GlobalNav">
      <Link to="/" className="logo">
        <img src={logo} alt="DSlogo" />
      </Link>
    </nav>
  );
};

export default NavBar;
