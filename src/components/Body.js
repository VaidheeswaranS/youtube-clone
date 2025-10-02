import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openToggleMenu } from "../utils/appSlice";

const Body = () => {
  const dispatcher = useDispatch();
  dispatcher(openToggleMenu());

  useEffect(() => {
    dispatcher(openToggleMenu());
  }, []);

  return (
    <div className="flex flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
