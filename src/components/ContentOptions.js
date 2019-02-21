import React from "react";
import Tray from "./Tray";

const ContentOptions = ({ handler }) => {
  const sortOptions = [
    { value: "title", name: "Title" },
    { value: "created_at", name: "Created" },
    { value: "votes", name: "Votes" },
    { value: "comment_count", name: "Comments" }
  ];

  return (
    <div className="ContentOptions">
      <Tray handler={handler} trayOptions={sortOptions} />
    </div>
  );
};

export default ContentOptions;
