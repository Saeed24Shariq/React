import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [flag, setFlag] = useState(false);
  let [name, setName] = useState("");
  let [error, setError] = useState("");
  useEffect( () => {
    if(name.length >= 20){
      setError("Name cannot be more than 20 letters.");
      setFlag(true);
    }
    else {
      setError("");
      setFlag(false);
    }
  }, [name] );

  return (
    <>
      <div className='bg-[#212121] h-screen flex p-10 box-border'>
        <div className='flex-1 flex justify-center'>
          <div className='flex flex-col justify-center'>
            <label className='text-white' htmlFor="name">Name: </label>
            <input id='name' className='w-[200px] border-2 p-1 rounded-4xl text-white focus:outline-white focus-within:bg-[#212121] has-[focus]:bg-[#212121] border-white' onChange={(e) => (setName(e.target.value))} type="text" />
            <p className='text-red-900'>{error}</p>
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <p className='text-white'>
            Hi,<br />
            My name is {(flag)? "" : name}. Hope so that you guys are good. Have a good day. <br />
            Best Regards,<br />
            {(flag)? "" : name}
          </p>
        </div>
      </div>
    </>
  )
}

export default App
