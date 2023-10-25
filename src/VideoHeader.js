import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import "./VideoHeader.css";
import { Link } from "react-router-dom";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <Link to="/" style={{ color: 'white' }}>
        <ArrowBackIosIcon />
      </Link>
      <Link to="/" style={{ color: 'white' }}>
        <CloseIcon />
      </Link>
    </div>
  );
}

export default VideoHeader;
