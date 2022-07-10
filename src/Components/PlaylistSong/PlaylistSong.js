import React from "react";
import "./PlaylistSong.css";

const PlaylistSong = (props) => {
  const { trackName, artistName } = props;
  return (
    <div>
      <div className="eachsongPlaylist">
        <p>Track Name:{trackName}</p>
        <p>Artist Name:{artistName}</p>
      </div>
    </div>
  );
};

export default PlaylistSong;
