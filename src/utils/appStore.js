import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import videosSliceReducer from "./videosSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
    videos: videosSliceReducer,
  },
});

export default store;
