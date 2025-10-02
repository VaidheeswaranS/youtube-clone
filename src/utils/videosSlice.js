import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    popularVideos: null,
    videoDetails: null,
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
    clearVideoDetails: (state) => {
      state.videoDetails = null;
    },
  },
});

export const { addPopularVideos, addVideoDetails, clearVideoDetails } =
  videosSlice.actions;

export default videosSlice.reducer;
