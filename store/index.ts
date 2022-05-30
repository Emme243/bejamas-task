import { configureStore } from '@reduxjs/toolkit';
import artworkFilterModalReducer from './artworkFilterModalSlice';
import categoryFilterReducer from './categoryFilterSlice';
import priceRangeFilterReducer from './priceRangeFilterState';
import artworkSortingReducer from './artworkSortingSlice';
import artworkFilterReducer from './artworkFilterSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    artworkFilterModal: artworkFilterModalReducer,
    categoryFilter: categoryFilterReducer,
    priceRangeFilter: priceRangeFilterReducer,
    artworkSorting: artworkSortingReducer,
    cart: cartReducer,
    artworkFilter: artworkFilterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
