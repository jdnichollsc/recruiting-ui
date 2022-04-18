import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from '.';

describe('<Book />', () => {
  const defaultProps = {
    book: {
      id: '1',
      title: 'Test Title',
      author: 'Test Author',
      image_url: 'https://via.placeholder.com/150',
      description: 'Test Description',
    },
    onSave: jest.fn(),
    onRemove: jest.fn(),
    saved: true,
    view: 'list',
  };
  it('renders correctly', () => {
    render(<Book {...defaultProps} />);
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByAltText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/test description/i)).toBeInTheDocument();
  });

  it('should navigate when title is clicked', () => {
    const { getByTestId } = render(<Book {...defaultProps} />);
    const title = getByTestId('title-link');
    title.click();
    expect(window.location.pathname).toBe('/books/1');
  });

  it('should navigate when image is clicked', () => {
    const { getByTestId } = render(<Book {...defaultProps} />);
    const image = getByTestId('image-link');
    image.click();
    expect(window.location.pathname).toBe('/books/1');
  });
});
