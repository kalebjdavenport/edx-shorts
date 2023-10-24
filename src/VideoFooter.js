import React from "react";
import "./VideoFooter.css";

function VideoFooter({ views, description, duration }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <div className="footer-button-logo">
          <img alt="video" src="https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png"></img>
          <button><strong>Start Course</strong></button>
        </div>
        <hr />
        <p className="description"><strong>CS50's Introduction to Computer Science</strong></p>
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