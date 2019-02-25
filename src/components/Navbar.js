import React from "react";
import "../styles/Navbar.css";
import UserIcon from "./UserIcon";
import Title from "./Title";
import Dropdown from "./Dropdown";

const Navbar = ({ user, navOptions, handler, selected }) => {
  return (
    <nav className="Navbar">
      <Title />
      <Dropdown
        trayOptions={navOptions}
        selected={selected}
        title={""}
        className="dropDown"
        handler={handler}
      />
      <UserIcon user={user} />
    </nav>
  );
};

export default Navbar;
