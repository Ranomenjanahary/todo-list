import React from 'react';

export const InputForm = ({ handleSubmit, todo, setTodo }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={(e) => {
        e.key === 'Enter' && handleSubmit();
      }}
      placeholder="Add task"
    />
  </form>
);