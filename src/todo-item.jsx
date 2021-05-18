export function TodoItem({ item }) {
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div role="todo-item" className="card mb-3">
      <div className="card-body">
        <div>{item.title}</div>
        <div>{item.description}</div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={item.done}
            id={item.id}
            checked={item.done}
          />
          <label className="form-check-label" htmlFor={item.id}>
            Done
          </label>
        </div>
      </div>
    </div>
  );
}
