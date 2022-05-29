import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortType = 'ASC' | 'DESC';

export interface ArtworkSortingState {
  sortBy: string;
  sortType: SortType;
}

const initialState: ArtworkSortingState = {
  sortBy: 'name',
  sortType: 'ASC',
};

export const artworkSortingSlice = createSlice({
  name: 'artworkSorting',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    toggleSortType: state => {
      state.sortType = state.sortType === 'ASC' ? 'DESC' : 'ASC';
    },
  },
});

export const { setSortBy, setSortType, toggleSortType } = artworkSortingSlice.actions;
export default artworkSortingSlice.reducer;
