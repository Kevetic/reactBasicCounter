import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1)
  }
  const subtractCounter = () => {
    if( counter > 0) {
      setCounter(counter - 1)
    } else {
      alert('Counter cannot go below 0')
    }
  }
  const clearCounter = () => {
    setCounter(0)
  }

  return (
    <div className="App">
      <div className='header-container'>
        <button onClick={subtractCounter}>-</button>
        <button onClick={clearCounter}>Clear</button>
        <button onClick={addCounter}>+</button>
      </div> 
      <div className='counter-container'>
        <span>Counter: {counter}</span>
      </div>
    </div>
  );
}

export default App;
