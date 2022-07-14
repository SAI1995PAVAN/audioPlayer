import React from "react";
import "./Favourites.css";

const FavouriteSongs = (props) => {
  const { trackName, artistName, handledislike } = props;
  return (
    <div className="favouritesComponent">
      <p>Track Name:{trackName}</p>
      <p>Artist Name:{artistName}</p>
      <button onClick={handledislike}>Dislike</button>
    </div>
  );
};

export default FavouriteSongs;
