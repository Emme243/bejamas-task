import { createSlice } from '@reduxjs/toolkit';

export interface ArtworkFilterModalState {
  isOpen: boolean;
}

const initialState: ArtworkFilterModalState = {
  isOpen: false,
};

export const artworkFilterModalSlice = createSlice({
  name: 'artworkFilterModal',
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

export const { openArtworkFilterModal, closeArtworkFilterModal } = artworkFilterModalSlice.actions;
export default artworkFilterModalSlice.reducer;
