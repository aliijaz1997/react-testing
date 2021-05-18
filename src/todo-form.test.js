import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "./todo-form";

test("when I type in title input, the title should update", () => {
  // arrange

  const handleAddTodoSpy = jest.fn();

  render(<TodoForm handleAddTodo={handleAddTodoSpy} />);

  const titleInput = screen.getByLabelText(/title/i);

  userEvent.type(titleInput, "TestTitle");

  expect(titleInput).toHaveValue("TestTitle");
});

test("when I type in description, the description should update", () => {
  // arrange
  const handleAddTodoSpy = jest.fn();

  render(<TodoForm handleAddTodo={handleAddTodoSpy} />);

  const DescriptionInput = screen.getByLabelText(/description/i);

  userEvent.type(DescriptionInput, "TestDescription");

  expect(DescriptionInput).toHaveValue("TestDescription");
});

test("when I click on done, it should check the component", () => {
  //arrange
  const handleAddTodoSpy = jest.fn();

  render(<TodoForm handleAddTodo={handleAddTodoSpy} />);

  const DoneInput = screen.getByLabelText(/done/i);

  userEvent.click(DoneInput);

  expect(DoneInput).toBeChecked();
});

test("when I click on `Add Todo` button, it should submit the form", () => {
  const handleAddTodoSpy = jest.fn();
  const { getByTestId } = render(<TodoForm handleAddTodo={handleAddTodoSpy} />);
  fireEvent.submit(getByTestId("form"));
  expect(handleAddTodoSpy).toHaveBeenCalled();
});

test("when I click `Add todo`, the form should not have empty values", () => {
  const handleAddTodoSpy = jest.fn();

  render(<TodoForm handleAddTodo={handleAddTodoSpy} />);
  const submitBtn = screen.getByText(/add todo/i);
  const titleInput = screen.getByLabelText(/title/i);
  const description = screen.getByLabelText(/description/i);
  userEvent.type(titleInput, "test");
  userEvent.type(description, "test");

  expect(titleInput).not.toHaveValue("");
  expect(description).not.toHaveValue("");

  userEvent.click(submitBtn);
});

test("when I click `Add todo`, it should reset the fields after the todo is added", () => {
  const handleAddTodoSpy = jest.fn();

  render(<TodoForm handleAddTodo={handleAddTodoSpy} />);
  const submitBtn = screen.getByText(/add todo/i);
  const titleInput = screen.getByLabelText(/title/i);
  const description = screen.getByLabelText(/description/i);
  userEvent.type(titleInput, "test");
  userEvent.type(description, "test");

  userEvent.click(submitBtn);

  expect(titleInput).toHaveValue("");
  expect(description).toHaveValue("");
});
