/* eslint-disable unicorn/prefer-spread */
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { loadState, saveState } from './utils';
import rootReducer from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    books: {
      saved: state.books.saved,
    },
  });
});

export default store;
