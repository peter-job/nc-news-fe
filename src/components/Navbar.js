import React from "react";
import "../styles/Navbar.css";
import UserIcon from "./UserIcon";
import Title from "./Title";

const Navbar = ({ username }) => {
  return (
    <div className="Navbar">
      <Title />
      <UserIcon username={username} />
    </div>
  );
};

export default Navbar;
