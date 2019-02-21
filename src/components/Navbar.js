import React from "react";
import "../styles/Navbar.css";
import UserIcon from "./UserIcon";
import Title from "./Title";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Title />
      <UserIcon />
    </div>
  );
};

export default Navbar;
