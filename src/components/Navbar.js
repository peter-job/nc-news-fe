import React from "react";
import "../styles/Navbar.css";
import UserIcon from "./UserIcon";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="title">
        <h2>NC News</h2>
      </div>
      <UserIcon />
    </div>
  );
};

export default Navbar;
