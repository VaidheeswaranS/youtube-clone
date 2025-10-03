import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import usePopularVideos from "../hooks/usePopularVideos";
import { useDispatch } from "react-redux";
import { openToggleMenu } from "../utils/appSlice";
import { clearVideoDetails } from "../utils/videosSlice";

const MainContainer = () => {
  const dispatcher = useDispatch();

  // changing the value in redux store to collapse the toggle menu
  dispatcher(openToggleMenu());

  // clearing the video details in redux store once the MainContainer component loads
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
