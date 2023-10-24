import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import "./VideoHeader.css";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon />
      <CloseIcon />
    </div>
  );
}

export default VideoHeader;