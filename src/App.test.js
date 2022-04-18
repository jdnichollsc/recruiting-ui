import React from 'react';
import { render, screen } from './testUtils';
import App from './App';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText(/bookcues/i)).toBeInTheDocument();
  });
});
