import React from "react";
import "./PlaylistSong.css";

const PlaylistSong = (props) => {
  const {
    trackName,
    artistName,
    onClick,
    handleFavourites,
    handleDeleteFromPlaylists,
    isPlaying,
    handlePlayPauseButtons,
  } = props;
  return (
    <div>
      <div className="eachsongPlaylist">
        <p>Track Name:{trackName}</p>
        <p>Artist Name:{artistName}</p>
        <button onClick={onClick}>
          {isPlaying === true ? "pause" : "play"}
        </button>
        <button onClick={handleFavourites}>like</button>
        <button onClick={handleDeleteFromPlaylists}>Delete</button>
      </div>
    </div>
  );
};

export default PlaylistSong;
