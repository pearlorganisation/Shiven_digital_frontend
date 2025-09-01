import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthData, Tokens, User } from "@/schemas/user/userSchema";

export interface UserState {
  userData: User | null;
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
    setLoginData: (state, action: PayloadAction<AuthData>) => {
      state.userData = action.payload.user;
      state.accessToken = action.payload.tokens.accessToken;
      state.refreshToken = action.payload.tokens.refreshToken;
    },

    setAccessToken: (state, action: PayloadAction<Tokens>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      resetState(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, setAccessToken, setLoginData } = authSlice.actions;

export default authSlice.reducer;
