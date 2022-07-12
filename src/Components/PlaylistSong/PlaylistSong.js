import React from "react";
import "./PlaylistSong.css";

const PlaylistSong = (props) => {
  const { trackName, artistName, onClick, handleFavourites } = props;
  return (
    <div>
      <div className="eachsongPlaylist">
        <p>Track Name:{trackName}</p>
        <p>Artist Name:{artistName}</p>
        <button onClick={onClick}>play</button>
        <button onClick={handleFavourites}>like</button>
      </div>
    </div>
  );
};

export default PlaylistSong;
