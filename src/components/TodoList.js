
export const TodoList = ({ doing, handleCheck }) => (
    <div className="todo">
      <h3>TODO</h3>
      <ul>
        {doing.map((todo, index) => (
          <li key={index}>
            {todo}
            <input type="checkbox" onClick={() => handleCheck(index)} />
          </li>
        ))}
      </ul>
    </div>
  );