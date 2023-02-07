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

import { DoneList } from "./components/DoneList";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <DoneList/>
      <InputForm/>
      <TodoList/>
      <h1>MAMPALAHELO ANAKAY</h1>
    </>

  );
}
export default App;

