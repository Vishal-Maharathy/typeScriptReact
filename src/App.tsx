import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>Todos App</h1>
      <Todo />
    </>
  )
}

interface TodoContainer{
  title: string,
  description: string,
  done: boolean
}

function Todo() {
  const [todo, setTodo] = useState<TodoContainer[]>([])
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const addTodo = () => {
    setTodo([
      ...todo,
      {
        title,
        description,
        done: false
      }
    ])
    setTitle('')
    setDescription('')
  }

  const markAsDone = (index: number) => {
    const newTodo = [...todo]
    newTodo[index].done = !newTodo[index].done
    setTodo(newTodo)
  }

  const deleteTodo = (index: number) => {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {!item.done?<h3>{item.title}</h3>:<h3 style={{textDecoration: 'line-through'}}>{item.title}</h3>}
            <p>{item.description}</p>
            <button onClick={() => markAsDone(index)}>Done</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
