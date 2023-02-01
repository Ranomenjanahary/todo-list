// import React, { Component, useState } from 'react';

// class IncrementC extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   handleIncrement() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.handleIncrement()}>Increment</button>
//         <p>Count: {this.state.count}</p>
//       </div>
//     );
//   }
// }



// function IncrementF() {
//   const [ count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={handleIncrement}>Increment</button>
//       <p>Count: {count}</p>
//     </div>
//   );
// }


// function App() {
//   return (
//     <>
//       <IncrementC/>
//       <IncrementF/>
//       <h1>MAMPALAHELO ANAKAY</h1>
//     </>

//   );
// }
// export default App;

import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDoing([...doing, todo]);
    setTodo('');
  }

  const handleDelete = (index) => {
    const newDoing = [...doing];
    newDoing.splice(index, 1);
    setDoing(newDoing);
  }

  const handleCheck = (index) => {
    const currentTodo = doing[index];
    handleDelete(index);
    setDone([...done, currentTodo]);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={todo} 
          onChange={e => setTodo(e.target.value)} onKeyDown={(e)=>{e.key === 'Enter' && handleSubmit()}}
          placeholder="Add task"
        />
      </form>
      <div className='todo'>
        <h3>TODO</h3>
        <ul>
          {doing.map((todo, index) => (
            <li key={index}>
              {todo}
              <input 
                type="checkbox" 
                onClick={() => handleCheck(index)} 
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='done'>
        <h3>DONE</h3>
        <ul>
          {done.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

