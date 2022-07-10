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
  const{playSong,playFunction}=props
    return (
      <div id="playSong">
        <div id="songImage">
          <img
            src="https://online.berklee.edu/takenote/wp-content/uploads/2019/03/killerHooks-1920x1200.png"
            alt=""
            width="300px"
            height="300px"
          />
        </div>
        <div id="playerFunctions">
          <button id="playPreviousFunction">
            <img src={previous} alt="" width="50px" height="50px" />
          </button>
          <button id="playFunction" onClick={playFunction}>
            <img src={play} alt="" width="50px" height="50px" />
          </button>
          <button id="playNextFunction">
            <img src={next} alt="" width="50px" height="50px" />
          </button> 
          <button id="favourites">
            <img src={favouritesAfterClick} alt="" width="50px" height="50px" />
          </button>
        </div>
      </div>
    );
  
}

export default MusicPlayer;
