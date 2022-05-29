import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PriceRangeFilterState {
  values: number[];
  queryRoute: string;
}

const initialState: PriceRangeFilterState = {
  values: [],
  queryRoute: '',
};

export const priceRangeFilterReducer = createSlice({
  name: 'priceRangeFilter',
  initialState,
  reducers: {
    setPriceRangeValues: (state, action: PayloadAction<number[]>) => {
      state.values = action.payload;
      state.queryRoute = action.payload.join(',');
    },
    emptyPriceRangeFilterValues: state => {
      state.values = [];
      state.queryRoute = '';
    },
  },
});

export const { setPriceRangeValues, emptyPriceRangeFilterValues } = priceRangeFilterReducer.actions;
export default priceRangeFilterReducer.reducer;
