import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LoggedInUser } from "@/schemas/user/userSchema";

export interface UserState {
  userData: LoggedInUser | null;
  refreshToken: string | null; 
  accessToken: string | null;
}

const initialState: UserState = {
  userData: null,
  refreshToken: null, 
  accessToken: null,
};

// Centralized reset function
const resetState = (state: UserState): void => {
  state.userData = null;
  state.accessToken = null;
  state.refreshToken = null; 
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<{ refreshToken: string; accessToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      resetState(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
