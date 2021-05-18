import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("should add todo to the end of the list", () => {
  render(<App />);
  const titleInput = screen.getByLabelText(/title/i);
  const descriptionInput = screen.getByLabelText(/description/i);
  const submitBtn = screen.getByText(/add todo/i);
  userEvent.type(titleInput, "title");
  userEvent.type(descriptionInput, "description");
  userEvent.click(submitBtn);
  const renderedItems = screen.getAllByRole("todo-item");
  expect(renderedItems[renderedItems.length - 1].textContent).toBe(
    `titledescriptionDone`
  );
});
test("should update todos, when new todo is added", () => {
  render(<App />);
  const titleInput = screen.getByLabelText(/title/i);
  const descriptionInput = screen.getByLabelText(/description/i);
  const submitBtn = screen.getByText(/add todo/i);
  userEvent.type(titleInput, "test title");
  userEvent.type(descriptionInput, "test description");
  userEvent.click(submitBtn);
  const renderedItems = screen.getAllByRole("todo-item");
  expect(renderedItems.length).toEqual(3);
});
