import edxHeader from "../assets/edx-header.png";
import edxBody from "../assets/edx-body.png";
import { Icon, IconButton } from "@edx/paragon";
import { PlayArrow } from "@edx/paragon/icons";
import playButton from "../assets/playButton.svg";
import cs50Img from "../assets/cs50-thumb1.png";
import { Link } from "react-router-dom";

export default function Gallery() {
  const getUrl = (i) => {
    if (i === 0) {
      return `url(${cs50Img})`;
    }
    const url = `url('https://picsum.photos/id/${10 + i}/240/400')`;
    return url;
  };

  return (
    <>
      <img className="w-100 pt-2 pb-2" src={edxHeader} />
      <div
        className="p-[30px] pr-0"
        style={{ background: "linear-gradient(rgba(0,0,0,0.05), transparent)" }}
      >
        <div className="flex justify-start items-center">
          <h2
            className="mb-8 mr-4 col-start-1 row-start-2 max-w-[36rem] text-4xl font-bold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Course previews
          </h2>
          <p className="text-xs mb-3 underline">See all</p>
        </div>
        <div className="overflow-scroll whitespace-nowrap">
          {Array.from({ length: 6 }, (x, i) => (
            <span
              className={`bg-gray-200 mr-[30px] inline-flex justify-center items-center`}
              key={`reel-${i}`}
              style={{
                backgroundImage: getUrl(i),
                width: "240px",
                height: "400px",
                padding: "16px, 12px, 16px, 12px",
                borderRadius: "8px",
                justify: "space-between",
              }}
            >
              <Link to="/play">
                <img
                  className="top-28 left-12 text-white"
                  src={playButton}
                  style={{ width: "50px", height: "50px" }}
                />
              </Link>
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
        <img src={edxBody} style={{ transform: "translate(0, -100px)" }} />
      </div>
    </>
  );
}
