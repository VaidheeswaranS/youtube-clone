import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeToggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import useVideoDetails from "../hooks/useVideoDetails";
import formatViewCount from "../utils/formatViewCount";
import formatPublishedTime from "../utils/formatPublishedTime";

const Watch = () => {
  const dispatcher = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatcher(closeToggleMenu());
  }, []);

  useVideoDetails(searchParams.get("v"));

  const videoDetails = useSelector((store) => store.videos?.videoDetails);

  return (
    videoDetails && (
      <div className="main-watch-container ml-6">
        <div className="video-container">
          <iframe
            className="w-[883px] h-[497px] rounded-xl mb-3"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <h1 className="title text-lg font-bold mb-3">
          {videoDetails[0]?.snippet?.title}
        </h1>
        <h1 className="channel-name text-md font-semibold mb-3">
          {videoDetails[0]?.snippet?.channelTitle}
        </h1>
        <div className="video-info-container w-[883px] text-sm py-2 bg-gray-200 rounded-md text-black">
          <div className="video-stats-container flex flex-row mb-1">
            <div className="views pl-2 mr-2 font-semibold">
              {formatViewCount(videoDetails[0]?.statistics?.viewCount)} views
            </div>
            <div className="published-at mr-2 font-semibold">
              {formatPublishedTime(videoDetails[0]?.snippet?.publishedAt)}
            </div>
            <div className="tags text-gray-800 mr-2 font-semibold">
              {videoDetails[0]?.snippet?.tags?.slice(0, 5).map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}&nbsp;
                </span>
              ))}
            </div>
          </div>
          {/** Add description in future if needed.. need more alignments to look good */}
          {/* <div className="video-description-links-container pl-2">
            <div className="description w-2/4">
              {videoDetails[0]?.snippet?.description}
            </div>
          </div> */}
        </div>
      </div>
    )
  );
};

export default Watch;
