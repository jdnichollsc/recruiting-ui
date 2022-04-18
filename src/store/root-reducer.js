import { combineReducers } from '@reduxjs/toolkit';
import { booksSliceReducer } from 'features/books/state';

const rootReducer = combineReducers({
  books: booksSliceReducer,
});

export default rootReducer;
