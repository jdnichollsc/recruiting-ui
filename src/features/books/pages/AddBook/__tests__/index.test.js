import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import AddBook from '..';
import * as hooks from '../useAddBook';

describe('<AddBook />', () => {
  let handleChange;
  let handleSubmit;
  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    jest.spyOn(hooks, 'useAddBook').mockImplementation(() => ({
      errors: {
        title: 'Title Error',
        author: 'Author Error',
        image_url: 'Image Error',
      },
      values: {
        title: 'test title',
        image_url: 'test image',
      },
      handleChange,
      handleSubmit,
    }));
  });

  it('renders correctly', () => {
    render(<AddBook />);
    expect(screen.getByText(/save/i)).toBeInTheDocument();
    expect(screen.getByText(/title error/i)).toBeInTheDocument();
    expect(screen.getByText(/author error/i)).toBeInTheDocument();
    expect(screen.getByText(/image error/i)).toBeInTheDocument();
    expect(screen.getByAltText(/test title/i)).toBeInTheDocument();
  });

  it('should call handleChange when input is changed', () => {
    render(<AddBook />);
    let input = screen.getByTestId('title-input');
    fireEvent.change(input, { target: { value: 'test' } });

    input = screen.getByTestId('author-input');
    fireEvent.change(input, { target: { value: 'test' } });

    input = screen.getByTestId('image-input');
    fireEvent.change(input, { target: { value: 'test' } });

    input = screen.getByTestId('description-textarea');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});
