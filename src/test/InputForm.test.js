import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputForm } from '../components/InputForm';


describe('InputForm component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<InputForm handleSubmit={() => {}} todo="" setTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls handleSubmit on form submit', () => {
    const handleSubmit = jest.fn();
    const { getByPlaceholderText } = render(
      <InputForm handleSubmit={handleSubmit} todo="" setTodo={() => {}} />
    );
    const input = getByPlaceholderText('Add task');
    fireEvent.submit(input.closest('form'));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('updates todo state on input change', () => {
    const setTodo = jest.fn();
    const { getByPlaceholderText } = render(
      <InputForm handleSubmit={() => {}} todo="" setTodo={setTodo} />
    );
    const input = getByPlaceholderText('Add task');
    fireEvent.change(input, { target: { value: 'new todo' } });
    expect(setTodo).toHaveBeenCalledWith('new todo');
  });

  it('calls handleSubmit on Enter key down', () => {
    const handleSubmit = jest.fn();
    const { getByPlaceholderText } = render(
      <InputForm handleSubmit={handleSubmit} todo="" setTodo={() => {}} />
    );
    const input = getByPlaceholderText('Add task');
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });
    expect(handleSubmit).toHaveBeenCalled();
  });
});
