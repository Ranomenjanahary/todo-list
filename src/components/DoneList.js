
export const DoneList = ({ done }) => (
    <div className="done">
      <h3>DONE</h3>
      <ul>
        {done.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );