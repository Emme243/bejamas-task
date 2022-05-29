import { createSlice } from '@reduxjs/toolkit';

export interface PriceRangeFilterState {
  values: number[];
}

const initialState: PriceRangeFilterState = {
  values: [],
};

export const priceRangeFilterReducer = createSlice({
  name: 'priceRangeFilter',
  initialState,
  reducers: {
    setPriceRangeFilterValues: (state, action) => {
      state.values = action.payload;
    },
    emptyPriceRangeFilterValues: state => {
      state.values = [];
    },
  },
});

export const { setPriceRangeFilterValues, emptyPriceRangeFilterValues } =
  priceRangeFilterReducer.actions;
export default priceRangeFilterReducer.reducer;
