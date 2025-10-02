import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import usePopularVideos from "../hooks/usePopularVideos";
import { useDispatch } from "react-redux";
import { openToggleMenu } from "../utils/appSlice";
import { clearVideoDetails } from "../utils/videosSlice";

const MainContainer = () => {
  const dispatcher = useDispatch();
  dispatcher(openToggleMenu());
  dispatcher(clearVideoDetails());

  usePopularVideos();

  return (
    <div className="ml-5">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
