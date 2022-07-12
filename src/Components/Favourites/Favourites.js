import React from "react";
import "./Favourites.css";

const FavouriteSongs = (props) => {
  const { trackName, artistName } = props;
  return (
    <div className="favouritesComponent">
      <p>Track Name:{trackName}</p>
      <p>Artist Name:{artistName}</p>
    </div>
  );
};

export default FavouriteSongs;
