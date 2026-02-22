import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  // const [tasks, setTasks] = useState(["yahohoho", 'friends']);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    if (newTask.trim() === '') return alert('enter todo');
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index)
    setTasks(updatedTask)
  }

  function moveTop(index) {
    if (index === 0) return
    const currTasks = [...tasks];
    [currTasks[index], currTasks[index - 1]] = [currTasks[index - 1], currTasks[index]]
    setTasks(currTasks);
  }
  function moveBottom(index) {
    if (index === tasks.length - 1) return
    const currTasks = [...tasks];
    [currTasks[index], currTasks[index + 1]] = [currTasks[index + 1], currTasks[index]]
    setTasks(currTasks);
  }

  useEffect(() => {
    function handleKeyUp(e) {
      if (e.key === 'Enter') {
        if (document.getElementById('addInput').value.trim() === '') {
          return document.getElementById('addInput').focus()
        }
        addTask();
      }
    }
    window.addEventListener('keyup', handleKeyUp)

    return ()=> window.removeEventListener('keyup',handleKeyUp)
  }, [newTask])

  return (
    <main className='grid gap-7'>
      <h1 className='pb-6'>To-Do_List</h1>

      <div className='flex justify-center gap-0.5'>
        <input
          type="text"
          placeholder='Enter a task...'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          className='bg-white placeholder:text-gray-400 text-black rounded focus:outline-green-500 focus:outline-2 pl-5'
          id='addInput'
        />
        <button id='addBtn' className='bg-green-500 active:outline-red-800 active:outline-2 py-2.5 px-5'
          onClick={addTask}>
          Add
        </button>
      </div>

      <ol className='grid justify-items-center gap-4'>
        {tasks.map((task, index) => (
          <li key={index} className='item flex justify-center items-center gap-2 bg-white text-black w-[80%] rounded py-3 px-3'>
            <p className='flex-1 font-bold text-3xl'>{task}</p>
            <button id='delete-btn'
              className='bg-red-600 text-white p-1'
              onClick={e => deleteTask(index)}>Delete</button>

            <button id='move-btn-top' className='move-button'
              onClick={e => moveTop(index)}>👆</button>

            <button id='move-btn-bottom' className='move-button'
              onClick={e => moveBottom(index)}>👇</button>
          </li>
        ))}
      </ol>
    </main>
  )
}

export default App
