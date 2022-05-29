import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CategoryFilterState {
  values: string[];
}

const initialState: CategoryFilterState = {
  values: [],
};

export const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState,
  reducers: {
    addCategoryFilter: (state, action: PayloadAction<string>) => {
      state.values.push(action.payload);
    },
    removeCategoryFilter: (state, action: PayloadAction<string>) => {
      state.values = state.values.filter(category => category !== action.payload);
    },
    emptyCategoryFilter: state => {
      state.values = [];
    },
  },
});

export const { addCategoryFilter, removeCategoryFilter, emptyCategoryFilter } =
  categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
