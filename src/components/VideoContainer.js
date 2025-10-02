import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const popularVideos = useSelector((store) => store.videos?.popularVideos);

  return (
    popularVideos && (
      <div className="flex flex-row flex-wrap">
        {popularVideos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
