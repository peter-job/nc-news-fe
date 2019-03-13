import React from "react";
import { Link } from "@reach/router";
import "../styles/UserIcon.css";

const UserIcon = ({ user }) => {
  return (
    <div className="UserIcon">
      <Link to="/login">
        <span className="userName">{user ? user.username : "Login"}</span>
      </Link>
      <Link to="/login">
        <img
          className="userAvatar"
          alt={user ? user.username : "login"}
          src={user ? user.avatar_url : "images/login.png"}
        />
      </Link>
    </div>
  );
};

export default UserIcon;
