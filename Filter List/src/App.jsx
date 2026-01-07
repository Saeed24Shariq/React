import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const list = ["Ali", "Hassan", "Faizan", "Fiaza", "Shamim", "Nouman", "Malik Aqib", "Humayun", "Shariq", "Saeed", "Hussain", "Ali", "Khan Brother"]


  let [searched, setSearched] = useState("");
  let [toSearch, setToSearch] = useState("");

  useMemo(() => { // useMemo is used to render when a change ocuurs only
    list.filter((item) => {
      console.log(searched)
      return item === toSearch;
    })
  }, [searched]);

  const search = () => {
    let val = document.getElementById("search").value
    setToSearch(val);
    setSearched(val);
  }

  return (
    <>
      <div className='bg-black h-screen flex flex-col items-center justify-center'>
        <input className='bg-white mb-3 p-2' type="text" id='search' />
        <button className='bg-white p-3 w-[10vw] rounded-3xl font-bold cursor-pointer' onClick={search}>Search</button>
        <p className='text-white'>{searched}</p>
      </div>
    </>
  )
}

export default App
