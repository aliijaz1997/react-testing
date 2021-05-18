import { useState } from "react";
export function TodoForm({ handleAddTodo }) {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    done: false,
  });

  function handleTodoChange(e) {
    setTodoData({ ...todoData, [e.target.name]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleAddTodo(todoData);
    setTodoData({ title: "", description: "", done: false });
  }

  return (
    <div className="card mb-3">
      <form
        className="card-body"
        onSubmit={handleFormSubmit}
        data-testid="form"
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={handleTodoChange}
            type="text"
            className="form-control"
            id="title"
            placeholder="Write your todo"
            name="title"
            value={todoData.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            onChange={handleTodoChange}
            value={todoData.description}
            className="form-control"
            id="description"
            name="description"
            rows="3"
          ></textarea>
        </div>
        <div className="form-check">
          <input
            onChange={handleTodoChange}
            className="form-check-input"
            type="checkbox"
            value={todoData.done}
            id="todo-done"
            name="done"
            checked={todoData.done}
          />
          <label className="form-check-label" htmlFor="todo-done">
            Done
          </label>
        </div>
        <button className="btn btn-primary mt-2">Add Todo</button>
      </form>
    </div>
  );
}
