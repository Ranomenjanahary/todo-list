import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DoneList } from '../components/DoneList';


afterEach(cleanup);

describe('DoneList component', () => {
  it('renders done tasks', () => {
    const done = ['task 1', 'task 2', 'task 3'];
    const { getByText } = render(<DoneList done={done} />);

    done.forEach(task => {
      expect(getByText(task)).toBeInTheDocument();
    });
  });
});
