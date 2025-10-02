import React, { useEffect } from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import usePopularVideos from "../hooks/usePopularVideos";
import { useDispatch } from "react-redux";
import { openToggleMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatcher = useDispatch();
  dispatcher(openToggleMenu());

  useEffect(() => {
    dispatcher(openToggleMenu());
  }, []);

  usePopularVideos();

  return (
    <div className="ml-5">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
