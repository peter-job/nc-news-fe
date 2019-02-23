import React from "react";
import Dropdown from "./Dropdown";
import "../styles/ContentOptions.css";

const ContentOptions = ({
  handler,
  sort_by,
  order,
  sortOptions,
  orderOptions
}) => {
  const getOptionName = (slug, options) => {
    return options.reduce((name, option) => {
      return option.value === slug ? option.name : name;
    }, "");
  };

  return (
    <div className="ContentOptions">
      <Dropdown
        handler={handler}
        trayOptions={sortOptions}
        title="Sort By"
        selected={getOptionName(sort_by, sortOptions)}
        field="sort_by"
      />
      <Dropdown
        handler={handler}
        trayOptions={orderOptions}
        title="Order"
        selected={getOptionName(order, orderOptions)}
        field="order"
      />
    </div>
  );
};

export default ContentOptions;
