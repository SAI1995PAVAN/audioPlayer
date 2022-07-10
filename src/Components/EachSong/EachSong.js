import React from "react";
import "./EachSong.css";

const EachSong = (props) => {
  const {
    trackName,
    artistName,
    individualCheckboxDisplay,
    checked,
    handleTogglefilter,
  } = props;
  return (
    <div className="eachsong">
      <div>
        <p>Track Name:{trackName}</p>
        <p>Artist Name:{artistName}</p>
      </div>
      <div className="individualCheckbox">
        <input
          type="checkbox"
          style={{
            margin: "10px",
            display: individualCheckboxDisplay,
            cursor: "pointer",
          }}
          checked={checked}
          onChange={handleTogglefilter}
        />
      </div>
    </div>
  );
};

export default EachSong;
