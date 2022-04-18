import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { FEATURE_NAMESPACE, initialState } from './reducer';

export const selectBooksState = state =>
  state[FEATURE_NAMESPACE] || initialState;

export const selectBooks = createSelector(
  selectBooksState,
  state => state.books || []
);
export const selectSavedBooks = createSelector(
  selectBooksState,
  state => state.saved || []
);
export const selectStatus = createSelector(
  selectBooksState,
  state => state.status
);

export const useBooks = () => useSelector(selectBooks);
export const useSavedBooks = () => useSelector(selectSavedBooks);
export const useStatus = () => useSelector(selectStatus);
