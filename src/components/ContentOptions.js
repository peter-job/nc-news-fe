import React from "react";
import Tray from "./Tray";
import "../styles/ContentOptions.css";

const ContentOptions = ({ handler, sort_by, order }) => {
  const sortOptions = [
    { value: "title", name: "Title" },
    { value: "created_at", name: "Date" },
    { value: "votes", name: "Votes" },
    { value: "comment_count", name: "Comments" }
  ];
  const orderOptions = [
    { value: "asc", name: "Ascending" },
    { value: "desc", name: "Descending" }
  ];

  const getOptionName = (slug, options) => {
    return options.reduce((name, option) => {
      return option.value === slug ? option.name : name;
    }, "");
  };

  return (
    <div className="ContentOptions">
      <Tray
        handler={handler}
        trayOptions={sortOptions}
        title="Sort By"
        selected={getOptionName(sort_by, sortOptions)}
      />
      <Tray
        handler={handler}
        trayOptions={orderOptions}
        title="Order"
        selected={getOptionName(order, orderOptions)}
      />
    </div>
  );
};

export default ContentOptions;
