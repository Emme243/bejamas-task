import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortType = 'ASC' | 'DESC';

interface ArtworkFilterStore {
  categories: string[];
  currentPage: number;
  priceRange: number[];
  sortBy: string;
  sortType: SortType;
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
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
  },
});

export const { setCategories, setCurrentPage, setPriceRange, setSortBy, setSortType } =
  artworkFilterSlice.actions;
export default artworkFilterSlice.reducer;
