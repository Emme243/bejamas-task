import { Artwork } from '../models/Artwork';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const CART_NAME = 'artwork-cart';
function setCartInStorage(artworks: Artwork[]): void {
  localStorage.setItem(CART_NAME, JSON.stringify(artworks));
}

interface CartState {
  artworks: Artwork[];
}

const initialState: CartState = {
  artworks: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartFromLocalStorage: state => {
      state.artworks = JSON.parse(localStorage.getItem(CART_NAME) || '[]');
    },
    addToCart: (state, action: PayloadAction<Artwork>) => {
      if (state.artworks.find(artwork => artwork.id === action.payload.id)) return;
      state.artworks.push(action.payload);
      localStorage.setItem(CART_NAME, JSON.stringify(state.artworks));
    },
    removeFromCart: (state, action: PayloadAction<Artwork>) => {
      state.artworks = state.artworks.filter(artwork => artwork.id !== action.payload.id);
      localStorage.setItem(CART_NAME, JSON.stringify(state.artworks));
    },
    emptyCart: state => {
      state.artworks = [];
      localStorage.setItem(CART_NAME, JSON.stringify(state.artworks));
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, getCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
