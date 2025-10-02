import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeToggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatcher = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatcher(closeToggleMenu());
  }, []);

  return (
    <div className="ml-6">
      <iframe
        className="w-[883px] h-[497px]"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
