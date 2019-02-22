import React from "react";
import "../styles/Navbar.css";
import UserIcon from "./UserIcon";
import Title from "./Title";

const Navbar = ({ user }) => {
  return (
    <div className="Navbar">
      <Title />
      <UserIcon user={user} />
    </div>
  );
};

export default Navbar;
