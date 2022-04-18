import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, SaveButton } from '.';

describe('<Button />', () => {
  it('renders correctly', () => {
    expect(render(<Button />)).toMatchSnapshot();
  });
});

describe('<SaveButton />', () => {
  const defaultProps = {
    onSave: jest.fn(),
    onRemove: jest.fn(),
    saved: true,
  };
  it('renders correctly', () => {
    render(<SaveButton {...defaultProps} />);
    expect(screen.getByText(/saved to list/i)).toBeInTheDocument();
    render(<SaveButton {...defaultProps} saved={false} />);
    expect(screen.getByText(/save to list/i)).toBeInTheDocument();
  });

  it('should call onSave when save button is clicked', () => {
    const props = {
      ...defaultProps,
      saved: false,
    };
    const { getByTestId } = render(<SaveButton {...props} />);
    const saveButton = getByTestId('save-button');
    saveButton.click();
    expect(props.onSave).toHaveBeenCalled();
  });

  it('should call onRemove when remove button is clicked', () => {
    const props = {
      ...defaultProps,
      saved: true,
    };
    const { getByTestId } = render(<SaveButton {...props} />);
    const removeButton = getByTestId('remove-button');
    removeButton.click();
    expect(props.onRemove).toHaveBeenCalled();
  });
});
