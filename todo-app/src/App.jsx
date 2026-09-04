import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  const [tasks, setTasks] = useState([
    {id: Date.now(), name: "Do chores", done: false},
    // {id: Date.now(), name: "Do dishes", done: false}
  ])

  const [inputValue, setInputValue] = useState("")

  function addTask() {
    if(!inputValue.trim()) return

    const newTask = {id: Date.now(), name: inputValue, done:false}
    setTasks([...tasks, newTask])
    setInputValue("")
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <div>
          <h1>To-do List App</h1>
          <input type='text' value={inputValue}   onChange={(e) => setInputValue(e.target.value)}/>
          <button className='add-btn'  onClick={addTask}>Add New Task</button>
          <ul className='task-list'>
              {tasks.filter((ta) => !ta.done).map((task) => 
                  <li key={task.id}>
                      <button onClick={() => removeTask(task.id)}>
                        {task.name}
                      </button>
                  </li>
              )}
          </ul>
      </div>
    </>
  )
}

export default App
