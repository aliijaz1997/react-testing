import { useState } from "react";
import "./App.css";
import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn javascript",
      description: "lorem ipsum",
      done: true,
    },
    {
      id: 2,
      title: "Learn typescript",
      description: "lorem ipsum",
      done: false,
    },
  ]);

  function handleAddTodo(todoData) {
    const newTodo = { id: todos.length + 1, ...todoData };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="container">
      <TodoForm handleAddTodo={handleAddTodo} />

      {todos.map((todo, id) => (
        <TodoItem key={id} item={todo} />
      ))}
    </div>
  );
}

export default App;
