import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    makeDark: (state) => {
      state.dark = true;
    },
    makeLight: (state) => {
      state.dark = false;
    },
  },
});
export const { makeDark, makeLight } = themeSlice.actions;

export default themeSlice.reducer;
