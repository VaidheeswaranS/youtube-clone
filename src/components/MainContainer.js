import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import usePopularVideos from "../hooks/usePopularVideos";

const MainContainer = () => {
  usePopularVideos();

  return (
    <div className="ml-5">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
