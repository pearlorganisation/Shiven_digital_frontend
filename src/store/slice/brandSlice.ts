import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { BrandType } from "@/schemas/brand/brandSchema";

export interface BrandState {
  brand: BrandType[] | null;
}

// --- Initial state ---
const initialState: BrandState = {
  brand: [],
};

const resetState = (state: BrandState): void => {
  state.brand = [];
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setbrand: (state, action: PayloadAction<BrandType[]>) => {
      state.brand = action.payload;
    },
    clearbrand: (state) => {
      resetState(state);
    },
  },
});

export const { setbrand, clearbrand } = brandSlice.actions;

// --- Export reducer ---
export default brandSlice.reducer;
