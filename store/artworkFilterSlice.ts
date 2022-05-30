import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArtworkFilterStore {
  categories: string[];
  currentPage: number;
  priceRange: number[];
  sortBy: string;
  sortType: 'ASC' | 'DESC';
}

const initialState: ArtworkFilterStore = {
  categories: [],
  currentPage: 1,
  priceRange: [],
  sortBy: 'name',
  sortType: 'ASC',
};

export const artworkFilterSlice = createSlice({
  name: 'artworkFilter',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setCategories, setCurrentPage, setPriceRange } = artworkFilterSlice.actions;
export default artworkFilterSlice.reducer;
