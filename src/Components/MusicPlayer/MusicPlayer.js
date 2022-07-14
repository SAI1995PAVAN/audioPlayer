import React from "react";
import "./MusicPlayer.css";
import play from "./play.png";
// import pause from "./pause2.png";
import previous from "./previous.png";
import next from "./next.png";
import favouritesAfterClick from "./favourites.png";
// import favouritesBeforeClick from "./favouritesBeforeClick.png";

// import { SkipPreviousIcon, SkipNextIcon } from "@mui/icons-material";

const MusicPlayer=(props)=> {
  const {
    
    handleplay,
    songImage,
    songUri,
    
    handleForward,
    handlePrevious,
    handleFavouritesSymbol} = props
    return (
      <div id="playSong">
        <div id="songImage">
          <img
            src={songImage}
            alt=""
            height="100%"
            width="100%"
          />
        </div>
        <div id="playerFunctions">
          <button id="playPreviousFunction" onClick={handlePrevious} >
            <img src={previous} alt="" width="40px" height="40px" />
          </button>
          <a id="playFunction" onClick={handleplay} href={songUri}>
            <img src={play} alt="" width="50px" height="50px" />
          </a>
          <button id="playNextFunction" onClick={handleForward}>
            <img src={next} alt="" width="40px" height="40px" />
          </button> 
          <button id="favourites" onClick={handleFavouritesSymbol}>
            <img src={favouritesAfterClick} alt="" width="50px" height="50px" />
          </button>
        </div>
      </div>
    );
  
}

export default MusicPlayer;
