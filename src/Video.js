import React, { useEffect, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import VideoHeader from "./VideoHeader";
import { useVideoAutoPlayback } from "./useVideoAutoPlayback";
import "./Video.css";

function Video({ url, views, description, duration, logoSrc, title }) {
  const [containerRef, videoRef, isVideoVisible] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  const [shouldShowContent, setShouldShowContent] = useState(true);

  useEffect(() => {
    if (isVideoVisible) {
      setShouldShowContent(true)
      const timer = setTimeout(() => {
        setShouldShowContent(false)
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVideoVisible]);

  return (
    <div className="video" ref={containerRef}>
      <video
        className="video__player"
        loop
        src={url}
        autoPlay
        ref={videoRef}
        controls
        title={title}
        muted
      >
      </video>
      <VideoHeader />
      {shouldShowContent ? (
        <>
          <VideoFooter logoSrc={logoSrc} title={title} views={views} description={description} duration={duration} />
          <VideoSidebar />
        </>
      ) : null}
    </div>
  );
}

export default Video;