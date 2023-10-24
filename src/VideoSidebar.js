import React from "react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IosShareIcon from '@mui/icons-material/IosShare';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import "./VideoSidebar.css";

function VideoSidebar() {
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <SmsOutlinedIcon fontSize="large" />
      </div>
      <div className="videoSidebar__button">
        <FileDownloadIcon fontSize="large" />
      </div>
      <div className="videoSidebar__button">
        <FavoriteBorderIcon fontSize="large" />
      </div>
      <div className="videoSidebar__button">
        <IosShareIcon fontSize="large" />
      </div>
    </div>
  );
}

export default VideoSidebar;