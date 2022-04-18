import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getBooks } from '../api';

export const fetchGetBooks = createAsyncThunk(
  'books/fetchGetBooks',
  async (listName, thunkAPI) => {
    const books = await getBooks(listName, thunkAPI.signal);
    return books;
  }
);

export const booksLoaded = createAction('booksLoaded');
export const bookAdded = createAction('bookAdded');
export const bookRemoved = createAction('bookRemoved');
export const bookSavedFromList = createAction('bookSavedFromList');
