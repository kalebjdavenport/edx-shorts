import React from "react";
import "./VideoFooter.css";

function VideoFooter({ title, logoSrc, views, description, duration }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <div className="footer-button-logo">
          <img alt="video" src={logoSrc}></img>
          <button><strong>Start Course</strong></button>
        </div>
        <hr />
        <p className="description"><strong>{title}</strong></p>
        <p className="description">{description}</p>
        <div className="metadata">
          <h3><strong>{views} Views</strong></h3>
          <h3><strong>{duration}</strong></h3>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;