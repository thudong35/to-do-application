import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function ListItem({name, onDeleteTask}) {
    return <li>
        <button onClick={onDeleteTask}>{name}</button>
    </li>
}

function App() {
  
  const [tasks, setTasks] = useState([
    {id: Date.now(), name: "Do chores", done: false},
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
          <input type='text'  value={inputValue}  onChange={(e) => setInputValue(e.target.value)}/>
          <button className='add-btn'  onClick={addTask}>Add New Task</button>
          <ul className='task-list'>
              {tasks.filter((ta) => !ta.done).map((task) => 
                  <ListItem key={task.id} name={task.name} onDeleteTask={() => removeTask(task.id)}/>
              )}
          </ul>
      </div>
    </>
  )
}

export default App
