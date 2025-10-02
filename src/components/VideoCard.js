import React from "react";
import formatViewCount from "../utils/formatViewCount";
import formatPublishedTime from "../utils/formatPublishedTime";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="main-video-card-container w-[380px] flex flex-col mr-3 mb-5 cursor-pointer">
      <div className="image-container">
        <img
          className="video-thumbnail object-cover w-[372px] h-[210px] mb-3 rounded-lg"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
      </div>

      <div className="video-details-container flex flex-row">
        {/* <div className="channel-logo-container flex">
          <img className="channel-logo" src="" alt="channel-logo" />
        </div> */}

        <div className="details-container flex flex-col">
          <p className="video-title font-bold leading-snug mb-1">{title}</p>
          <p className="channel-title text-gray-600 text-sm mb-1">
            {channelTitle}
          </p>
          <div className="views-published-container flex flex-row text-gray-600 text-sm mb-1">
            <div className="view-count mr-2">
              {formatViewCount(viewCount)}K views •{" "}
            </div>
            <div className="published-date">
              {formatPublishedTime(publishedAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
