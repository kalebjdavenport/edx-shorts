import React from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";
import video from './full_format.mp4'

function Video({ url, views, description, duration }) {

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src={video}
        autoPlay
      >
      </video>
      <VideoFooter views={views} description={description} duration={duration} />
      <VideoSidebar />
    </div>
  );
}

export default Video;