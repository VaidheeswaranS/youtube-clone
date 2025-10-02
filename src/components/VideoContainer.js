import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const popularVideos = useSelector((store) => store.videos?.popularVideos);

  return (
    popularVideos && (
      <div className="flex flex-row flex-wrap">
        {popularVideos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))}
      </div>
    )
  );
};

export default VideoContainer;
