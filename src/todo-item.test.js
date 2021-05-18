import { render, screen } from "@testing-library/react";
import { TodoItem } from "./todo-item";

test("renders the component", () => {
  const todo = {
    id: 1,
    title: "Learn javascript",
    description: "lorem ipsum",
    done: true,
  };

  render(<TodoItem item={todo} />);
});

test("should display title, description and done checkbox", () => {
  const todo = {
    id: 1,
    title: "Learn javascript",
    description: "lorem ipsum",
    done: false,
  };

  render(<TodoItem item={todo} />);

  const descriptionElement = screen.getByText(/lorem ipsum/i);
  const titleElement = screen.getByText(/lorem ipsum/i);
  const doneElement = screen.getByLabelText(/done/i);

  expect(descriptionElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();

  expect(doneElement).not.toBeChecked();
});
