import { createSlice } from "@reduxjs/toolkit";
import type {  PayloadAction } from "@reduxjs/toolkit";

const globalDataSlice = createSlice({
  name: "globalData",
  initialState: {
    isSidebarOpen: false,
    status:"balance"
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;  
    },
  },
});

export const { toggleSidebar } = globalDataSlice.actions;
export default globalDataSlice.reducer;
