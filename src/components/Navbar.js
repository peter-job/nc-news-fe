import React from "react";
import "../styles/Navbar.css";
import UserIcon from "./UserIcon";
import Title from "./Title";

const Navbar = ({ user }) => {
  return (
    <nav className="Navbar">
      <Title />
      <UserIcon user={user} />
    </nav>
  );
};

export default Navbar;
