/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import {
  bookAdded,
  bookRemoved,
  booksLoaded,
  bookSavedFromList,
  fetchGetBooks,
} from './actions';

export const BooksStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

export const initialState = {
  books: [],
  saved: [],
  status: BooksStatus.IDLE,
};

export const FEATURE_NAMESPACE = 'books';

const booksSlice = createSlice({
  name: FEATURE_NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(booksLoaded, (state, action) => {
      state.books = action.payload || [];
    });
    builder.addCase(bookAdded, (state, action) => {
      state.saved.push(action.payload);
    });
    builder.addCase(bookRemoved, (state, { payload: bookId }) => {
      const indexToRemove = state.saved.findIndex(book => book.id === bookId);
      if (indexToRemove > -1) {
        state.saved.splice(indexToRemove, 1);
      }
    });
    builder.addCase(bookSavedFromList, (state, action) => {
      state.saved = [...state.saved, action.payload];
    });
    // Actions for fetchGetBooks
    builder.addCase(fetchGetBooks.pending, state => {
      state.status = BooksStatus.LOADING;
    });
    builder.addCase(fetchGetBooks.fulfilled, (state, action) => {
      state.status = BooksStatus.SUCCESS;
      state.books = action.payload || [];
    });
    builder.addCase(fetchGetBooks.rejected, (state, action) => {
      state.status = BooksStatus.ERROR;
      state.error = action.payload;
    });
  },
});

export const booksSliceReducer = booksSlice.reducer;
