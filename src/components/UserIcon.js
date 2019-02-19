import React from "react";
import "../styles/UserIcon.css";

const UserIcon = () => {
  const username = "user";
  return (
    <div className="UserIcon">
      <img
        alt={username}
        src="https://pbs.twimg.com/profile_images/610487054569336832/yrUSzk7S.jpg"
      />
    </div>
  );
};

export default UserIcon;
