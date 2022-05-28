import { createSlice } from '@reduxjs/toolkit';

export interface ArtworkFilterState {
  isOpen: boolean;
}

const initialState: ArtworkFilterState = {
  isOpen: false,
};

export const artworkFilterSlice = createSlice({
  name: 'artworkFilter',
  initialState,
  reducers: {
    openArtworkFilterModal: state => {
      state.isOpen = true;
    },
    closeArtworkFilterModal: state => {
      state.isOpen = false;
    },
  },
});

export const { openArtworkFilterModal, closeArtworkFilterModal } = artworkFilterSlice.actions;
export default artworkFilterSlice.reducer;
