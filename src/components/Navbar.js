import React from "react";
import { Location, Link } from "@reach/router";
import "../styles/Navbar.css";
import UserIcon from "./UserIcon";
import Dropdown from "./Dropdown";

const navOptions = [
  { value: "/", name: "Home" },
  { value: "/login", name: "Login" },
  { value: "/article/new", name: "New Article" }
];

const navRef = {
  "/": "Home",
  "/login": "Login",
  "/article/new": "New Article",
  "/articles/id": "Articles"
};

const Navbar = ({ user, handler }) => {
  return (
    <nav className="Navbar">
      <div className="Title">
        <Link to="/">
          <h2>NC</h2>
        </Link>
      </div>
      <Location>
        {({ location }) => (
          <Dropdown
            trayOptions={navOptions}
            selected={
              navRef[location.pathname.replace(/(\d+)$/, "id")] || "Home"
            }
            title={""}
            className="dropDown"
            handler={handler}
          />
        )}
      </Location>
      <UserIcon user={user} />
    </nav>
  );
};

export default Navbar;
