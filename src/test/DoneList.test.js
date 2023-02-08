import React from 'react';
import { DoneList } from '../components/DoneList';
import { render } from '@testing-library/react';

describe('DoneList component', () => {
  it('renders correctly with snapshot', () => {
    const done = ['task 1', 'task 2'];
    const { container } = render(<DoneList done={done} />);
    expect(container).toMatchSnapshot();
  });
});