import React from "react";
import "./PlaylistSong.css";

const PlaylistSong = (props) => {
  const {
    trackName,
    artistName,
    onClick,
    handleFavourites,
    handleDeleteFromPlaylists,
    favouriteSongs,
    trackURI,
    // playlistSongs,
    songPlayingNow,
    // isPlaying,
  } = props;
  let isPlay;
  let playExist = songPlayingNow.filter((item) => {
    return item.track.uri.includes(trackURI);
  });
  if (playExist.length > 0) {
    isPlay = true;
  } else {
    isPlay = false;
  }
  const playText = isPlay ? "pause" : "play";
  const likeText = favouriteSongs.map((e) => e.track.uri).includes(trackURI)
    ? "liked"
    : "Like";
  return (
    <div>
      <div className="eachsongPlaylist">
        <p>Track Name:{trackName}</p>
        <p>Artist Name:{artistName}</p>
        <button onClick={onClick}>{playText}</button>
        <button disabled={likeText === "liked"} onClick={handleFavourites}>
          {likeText}
        </button>
        <button onClick={handleDeleteFromPlaylists}>Delete</button>
      </div>
    </div>
  );
};

export default PlaylistSong;
