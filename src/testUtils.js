import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const customRender = (
  ui,
  {
    initialState = {},
    reducer = state => state,
    store = configureStore({
      reducer,
      preloadedState: initialState,
    }),
    ...options
  } = {}
) => {
  /* eslint-disable-next-line react/prop-types */
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
