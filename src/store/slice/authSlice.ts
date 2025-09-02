import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "@/schemas/user/userSchema";

// --- State shape ---
export interface UserState {
  user: UserType | null;
}

// --- Initial state ---
const initialState: UserState = {
  user: null,
};

// --- Centralized reset ---
const resetState = (state: UserState): void => {
  state.user = null;
};

// --- Slice ---
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      resetState(state);
    },
  },
});

// --- Export actions ---
export const { setUser, clearUser } = userSlice.actions;

// --- Export reducer ---
export default userSlice.reducer;
