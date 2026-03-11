import { createSlice } from "@reduxjs/toolkit";

interface FacebookState {
  pages: any[];
  loading: boolean;
  error: string | null;
}

const initialState: FacebookState = {
  pages: [],
  loading: false,
  error: null,
};

const facebookSlice = createSlice({
  name: "facebook",
  initialState,

  reducers: {

    setPages: (state, action) => {
      state.pages = action.payload;
      state.loading = false;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

  },

});

export const { setPages, setLoading, setError } = facebookSlice.actions;

export default facebookSlice.reducer;