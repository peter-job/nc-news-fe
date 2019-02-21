import React from "react";
import { Link } from "@reach/router";

const Title = () => {
  return (
    <div className="Title">
      <Link to="/">
        <h2>NC News</h2>
      </Link>
    </div>
  );
};

export default Title;
