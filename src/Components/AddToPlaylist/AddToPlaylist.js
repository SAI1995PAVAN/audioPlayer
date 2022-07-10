import React from "react";
import "./AddToPlaylist.css";

const AddToPlaylist = (props) => {
  const { onClick } = props;
  return (
    <div id="playlist-button">
      <button onClick={onClick}>Add to Playlist</button>
    </div>
  );
};

export default AddToPlaylist;
