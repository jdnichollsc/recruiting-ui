import React from 'react';
import * as router from '@reach/router';
import { render, screen } from '@testing-library/react';
import Banner from '.';

describe('<Banner />', () => {
  it('renders correctly', () => {
    render(<Banner />);
    expect(screen.getByText(/bookcues/i)).toBeInTheDocument();
    expect(screen.getByText(/saved books/i)).toBeInTheDocument();
  });

  it('should navigate when logo is clicked', () => {
    const spyNavigate = jest.spyOn(router, 'navigate');
    const { getByText } = render(<Banner />);
    const logo = getByText(/bookcues/i);
    logo.click();
    expect(spyNavigate).toHaveBeenCalledWith('/');
  });
});
