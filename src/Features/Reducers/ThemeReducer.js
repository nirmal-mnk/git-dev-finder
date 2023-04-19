import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
  name: "darkMode",
  initialState: {
    currentTheme: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.currentTheme = !state.currentTheme;
    },
  },
});
export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
