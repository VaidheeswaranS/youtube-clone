import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenuItems: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeToggleMenu: (state) => {
      state.isMenuOpen = false;
    },
    openToggleMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenuItems, closeToggleMenu, openToggleMenu } =
  appSlice.actions;

export default appSlice.reducer;
