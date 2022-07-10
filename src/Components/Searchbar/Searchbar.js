import React from "react";
import "./Searchbar.css";
import menu from "./menu.png";

const Searchbar = (props) => {
  const { onChange, value, mainCheckBox, onhandleMenuClick, onClick } = props;
  return (
    <div className="searchbar">
      <input type="search" value={value} onChange={onChange} />
      <input
        type="checkbox"
        id="inputCheckbox"
        value={mainCheckBox}
        onChange={onClick}
      />
      <button className="checkBoxButton" onClick={onhandleMenuClick}>
        <img src={menu} alt="" style={{ width: "20px", height: "20px" }} />
      </button>
    </div>
  );
};
export default Searchbar;
