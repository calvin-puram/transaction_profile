import React from "react";
import "./Header.css";
import Logo from "../logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="website logo" className="logo" />
    </div>
  );
};

export default Header;
