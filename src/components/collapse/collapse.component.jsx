import React from "react";
import "./collapse.style.scss";
export const Collapse = ({ collapse, handleClick }) => {
  return (
    <div className="close" onClick={handleClick}>
      <span className="material-symbols-outlined">
        {collapse ? "close" : "menu"}
      </span>
    </div>
  );
};
