import { createSlice } from "@reduxjs/toolkit";

const globalDataSlice = createSlice({
  name: "globalData",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = globalDataSlice.actions;
export default globalDataSlice.reducer;
