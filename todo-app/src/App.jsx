import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import './App.css'



function App() {
  
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ||[])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [inputValue, setInputValue] = useState("")

  function addTask() {
    if(!inputValue.trim()) return

    const newTask = {id: crypto.randomUUID(), name: inputValue, done:false}
    setTasks([...tasks, newTask])
    setInputValue("")
  }

  function keyDown(e) {
    if(e.key === 'Enter') {
      addTask()
    }
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div>
          <h1>To-do List App</h1>
          <input className='task-input' type='text'  value={inputValue} onKeyDown={keyDown}  onChange={(e) => setInputValue(e.target.value)}/>
          <button className='add-task-btn'  onClick={addTask}>Add New Task</button>
          <TaskList tasks={tasks} onRemoveTask={removeTask}/>
          
      </div>
    </>
  )
}

export default App
