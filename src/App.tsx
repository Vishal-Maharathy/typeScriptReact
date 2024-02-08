import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Todo App</h1>
      <Todo />
    </>
  )
}

function Todo() {
  const [todos, setTodos] = useState<string[]>([])
  const [todo, setTodo] = useState<string>('')
  function handleAddTodo() {
    setTodos([...todos, todo])
    setTodo('')
  }
  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
export default App
