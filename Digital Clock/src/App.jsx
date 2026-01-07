import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import clockImg from "./assets/Clock.png";

function App() {

  // time
  let [hour, setHour] = useState(new Date().getHours());
  let [minutes, setMinutes] = useState(new Date().getMinutes());
  let [seconds, setSeconds] = useState(new Date().getSeconds());
  let [AM_PM, setAM_PM] = useState("");
  let [flag, setFlag] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (seconds > 58) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      else if (minutes > 58) {
        setHour(hour + 1);
        setMinutes(0);
        setSeconds(0);
      }
      else {
        setSeconds(seconds + 1);
      }
    }, 1000); { flag }
  })

  const convertTime = () => {
    if (flag == true) {
      if (hour > 12) {
        setHour(hour - 12);
        setAM_PM("PM")
      }
      else {
        setAM_PM("AM");
      }
      setFlag(false);
    }
    else {
      setHour(hour + 12);
      setAM_PM("");
      setFlag(true);
    }
  }

  const check = (time) => {
    const text = String(time)
    if (text.length <= 1) {
      return "0" + text;
    }
    else {
      return text;
    }
  }

  return (
    <>
      <div className='h-screen bg-black flex flex-col p-10 box-border'>
        <div>
          <h1 className='text-white text-center text-4xl sm:text-4xl, md:text-5xl, lg:text-6xl, xl:text-6xl font-bold'>Digital Clock</h1>
        </div>
        <div className='sm:flex, md:flex lg:hidden, xl:hidden flex flex-1 items-center justify-center flex-col'>
          <img src={clockImg} alt="clockImg" />
        </div>
        <div className='flex flex-1 lg:justify-center items-center lg:h-[95%]'>
          <div className='flex-1 flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-white sm:text-5xl, md:text-6xl, lg:text-6xl, xl:text-6xl py-3'>Time: {check(hour)}:{check(minutes)}:{check(seconds)} {AM_PM}</h1>
            <button className='bg-white p-4 rounded-4xl font-bold cursor-pointer' onClick={convertTime}>Other Standrard</button>
          </div>
          <div className='sm:hidden, md:hidden lg:flex, xl:flex hidden flex-1 items-center justify-center flex-col'>
            <img src={clockImg} alt="clockImg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
