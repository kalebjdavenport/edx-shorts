import edxHeader from "../assets/edx-header.png";
import edxBody from "../assets/edx-body.png";
import { Icon, IconButton } from "@edx/paragon";
import { PlayArrow } from "@edx/paragon/icons";
import playButton from "../assets/playButton.svg";
import thumb0 from "../assets/thumb0.png";
import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import thumb4 from "../assets/thumb4.png";


import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Gallery.css";

export default function Gallery() {
  const getUrl = (i) => {
    if (i === 0) {
      return `url(${thumb0})`;
    }
    if (i === 1) {
      return `url(${thumb1})`;
    }
    if (i === 2) {
      return `url(${thumb2})`;
    }
    if (i === 3) {
      return `url(${thumb3})`;
    }
    if (i === 4) {
      return `url(${thumb4})`;
    }
  };

  return (
    <div className="gallery">
      <img className="edx-header" src={edxHeader} style={{ width: "100%" }} />
      <div
        className="gallery-background"
        style={{ background: "linear-gradient(rgba(0,0,0,0.05), transparent)" }}
      >
        <div className="preview-header">
          <h2
            className="preview-headline"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Course previews
          </h2>
          <a className="more-link">See all</a>
        </div>
        <div className="reel">
          {Array.from({ length: 5 }, (x, i) => (
            <span className="thumbnail-container">
              <span
                className="thumbnail"
                key={`reel-${i}`}
                style={{
                  backgroundImage: getUrl(i),
                }}
              >
                <MoreVertIcon
                  className="more-icon"
                  style={{ color: "white" }}
                />
                <Link to="/play">
                  <img
                    className="play-button"
                    src={playButton}
                    width={50}
                    height={50}
                  />
                </Link>
                <div className="thumbnail-footer">
                  <h3 className="thumbnail-title">
                    CS50's Introduction to Computer Science
                  </h3>
                  <h4 className="thumbnail-subtitle">1.7M views</h4>
                </div>
              </span>
              <p className="duration">2:23</p>
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(rgba(0,0,0,0.05), transparent)",
          overflow: "hidden",
        }}
      >
        <img
          src={edxBody}
          className="edx-body"
        />
      </div>
    </div>
  );
}
