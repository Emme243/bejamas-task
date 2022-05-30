import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CategoryFilterState {
  values: string[];
  queryRoute: string;
}

const initialState: CategoryFilterState = {
  values: [],
  queryRoute: '',
};

export const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState,
  reducers: {
    setCategoryFilter: (state, action: PayloadAction<{ values: string[]; queryRoute: string }>) => {
      state.values = action.payload.values;
      state.queryRoute = action.payload.queryRoute;
    },
    addCategoryFilter: (state, action: PayloadAction<string>) => {
      state.values.push(action.payload);
      state.queryRoute = state.values.join(',');
    },
    removeCategoryFilter: (state, action: PayloadAction<string>) => {
      state.values = state.values.filter(category => category !== action.payload);
      state.queryRoute = state.values.join(',');
    },
    emptyCategoryFilter: state => {
      state.values = [];
      state.queryRoute = '';
    },
  },
});

export const { addCategoryFilter, removeCategoryFilter, emptyCategoryFilter, setCategoryFilter } =
  categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
