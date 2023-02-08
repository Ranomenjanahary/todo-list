import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MyScreen } from './MyScreen';

describe('MyScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MyScreen />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('handles button click', () => {
    const { getByText } = render(<MyScreen />);
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(getByText('Button was clicked')).toBeInTheDocument();
  });
});
