import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { BrandType } from "@/schemas/brand/brandSchema";

export interface BrandState {
  brands: BrandType[];
}

// --- Initial state ---
const initialState: BrandState = {
  brands: [],
};

const resetState = (state: BrandState): void => {
  state.brands = [];
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setbrand: (state, action: PayloadAction<BrandType[]>) => {
      state.brands = action.payload;
    },
    clearbrand: (state) => {
      resetState(state);
    },
  },
});

export const { setbrand, clearbrand } = brandSlice.actions;

// --- Export reducer ---
export default brandSlice.reducer;
