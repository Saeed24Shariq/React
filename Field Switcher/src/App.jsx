import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [field, setField] = useState("text");

  const switcher = () => {
    if(field == "text"){
      field = "password";
      setField(field);
    }
    else if(field == "password") {
      field = "text";
      setField(field);
    }
    else {
      alert("Invalid field");
    }
  }

  return (
    <>
      <h1>Field Switcher</h1>
      <h2>A Simple Field Switcher App</h2>
      <input type={field} />
      <br />
      <button onClick={switcher}>{field}</button>
    </>
  )
}

export default App
