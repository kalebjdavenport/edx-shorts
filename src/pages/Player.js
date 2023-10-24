import React from "react";
import Video from "../Video";
import "../Player.css"

function Player() {
  return (
    // BEM
    <div className="player">
      <div className="player__videos">
        <Video
          url={'https://youtu.be/ib4NNsp2qW4'}
          duration={'2:13'}
          views={'200K'}
          description={'An introduction to the intellectual enterprises of computer science and the art of programming.'}
        />
      </div>
    </div>
  );
}

export default Player;