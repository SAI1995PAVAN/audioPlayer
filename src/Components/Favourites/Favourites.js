import React from "react";
import "./Favourites.css";
import PropTypes from 'prop-types';

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

FavouriteSongs.propTypes = {
  trackName: PropTypes.oneOfType([PropTypes.number,PropTypes.bool,PropTypes.string]),
  artistName: PropTypes.string,
  as:PropTypes.elementType
}

export default FavouriteSongs;
