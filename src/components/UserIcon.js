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
          src="https://pbs.twimg.com/profile_images/610487054569336832/yrUSzk7S.jpg"
        />
      </Link>
    </div>
  );
};

export default UserIcon;
