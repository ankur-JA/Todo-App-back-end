import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodo] = useState([{
    title: "Go to gym",
    description: "At 4-5",
    id:  1
  },{
    title: "Go to Class",
    description: "At 7",
    id: 2
  }])
  return (
    <>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </>
  )
}

function Todo(probs) {
  return <div>
    {probs.title}
    {probs.description}
  </div>
}


export default App
