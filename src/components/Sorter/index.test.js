import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sorter from '.';

describe('<Sorter />', () => {
  it('renders correctly', () => {
    render(<Sorter onChange={jest.fn()} />);
    expect(screen.getByText(/sort by/i)).toBeInTheDocument();
  });

  it('should call onChange when select is changed', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Sorter onChange={onChange} />);
    const select = getByTestId('sorter');
    fireEvent.change(select, { target: { value: 'author' } });
    expect(onChange).toHaveBeenCalledWith('author');
  });
});
