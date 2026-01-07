import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const incrementVal = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
    }
    else {
      alert("Can't Exceed up to 20");
    }
  }
  const decrementVal = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
    else {
      alert("Can't go below 0");
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>A Simple Counter App</h3>
      <h4>Value: {counter}</h4>
      <button onClick={incrementVal}>Increment</button>
      <button onClick={decrementVal}>Decrement</button>
    </>
  )
}

export default App
