import { useState } from 'react'
import './App.css'

function Counter(){
  const [count, setCount]=useState(0);

  function incrementHandler(){
    setCount(prevCount => prevCount+1);
  }

  function decrementHandler(){
    setCount(prevCount => prevCount-1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div>
      {console.log("Counter rendered...")}
      <h1>Counter</h1>
      <p>Count: {count}</p>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App
