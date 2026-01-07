import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {


  const [count, setCount] = useState(2);

  let [todoList, setTodoList] = useState([{
    id: 1,
    task: "Learn React",
    description: "Practice useState",
    status: "Pending"
  }]);


  useEffect(() => {
    setTodoList(todoList);
  }, [todoList])

  function fetchData() {
    const task = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    todoList.push({
      id: count,
      task: task,
      description: description,
      status: "pending"
    });
    setCount(count + 1);
  }

  return (
    <>
      <div className='bg-[#313131] flex flex-col items-center'>
        <h1 className='text-3xl text-white font-bold'>To do List App</h1>
        <div className='p-4 box-border grid grid-cols-4 gap-5'>
          {
            todoList.map((item) => {
              return (
                <div key={item.id} className='flex items-center justify-center text-white bg-[#212121] p-3 rounded-2xl h-[30vh]'>
                  <div>
                    <h1 className='text-lg'>Task No: {item.id}</h1>
                    <h1 className='text-lg'>Task Name: {item.task}</h1>
                    <h1 className='text-lg'>Description: {item.description}</h1>
                    <h1 className='text-lg'>Status: {item.status}</h1>
                  </div>
                </div>
              )
            })
          }

          <div className='flex flex-col bg-[#212121] h-[30vh] p-3 rounded-2xl'>
            <div className='flex flex-col'>
              <label className='text-lg text-white' htmlFor="task">Task {todoList.taskNo}: </label>
              <input id="task" type="text" className='border-1 border-white outline-none text-white' />
              <label className='text-lg text-white' htmlFor="description">Description: </label>
              <input id="description" type="text" className='border-1 border-white outline-none mb-3 text-white' />
              <div className='flex justify-center '>
                <button onClick={fetchData} className='bg-white p-2 w-[15vw] rounded-3xl  font-bold'>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
