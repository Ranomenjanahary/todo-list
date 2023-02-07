import React from 'react';
import { TodoList } from '../components/TodoList';
import { render, fireEvent } from "@testing-library/react";

describe("TodoList component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <TodoList
        doing={["Test Todo 1", "Test Todo 2"]}
        handleCheck={jest.fn()}
      />
    );
    const todo1 = getByText("Test Todo 1");
    expect(todo1).toBeInTheDocument();
    const todo2 = getByText("Test Todo 2");
    expect(todo2).toBeInTheDocument();
  });

  it("calls handleCheck when a checkbox is clicked", () => {
    const handleCheck = jest.fn();
    const { getByDisplayValue } = render(
      <TodoList
        doing={["Test Todo 1"]}
        handleCheck={handleCheck}
      />
    );
    const checkbox = getByDisplayValue("checkbox");
    fireEvent.click(checkbox);
    expect(handleCheck).toHaveBeenCalledWith(0);
  });
});
