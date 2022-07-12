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
  const{playSong,playPause,songImage}=props
    return (
      <div id="playSong">
        <div id="songImage">
          <img
            src={songImage}
            alt=""
            
          />
        </div>
        <div id="playerFunctions">
          <button id="playPreviousFunction" >
            <img src={previous} alt="" width="40px" height="40px" />
          </button>
          <button id="playFunction" onClick={playPause}>
            <img src={play} alt="" width="50px" height="50px" />
          </button>
          <button id="playNextFunction">
            <img src={next} alt="" width="40px" height="40px" />
          </button> 
          <button id="favourites">
            <img src={favouritesAfterClick} alt="" width="50px" height="50px" />
          </button>
        </div>
      </div>
    );
  
}

export default MusicPlayer;
