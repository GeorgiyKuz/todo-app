import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";

test("добавление новой задачи", () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText("Добавить новую задачу");
  const addButton = screen.getByText("Добавить");

  fireEvent.change(input, { target: { value: "Новая задача" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Новая задача")).toBeInTheDocument();
});

test("переключение статуса задачи", () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText("Добавить новую задача");
  const addButton = screen.getByText("Добавить");

  fireEvent.change(input, { target: { value: "Новая задача" } });
  fireEvent.click(addButton);

  const task = screen.getByText("Новая задача");
  fireEvent.click(task);

  expect(task).toHaveStyle("text-decoration: line-through");
});

test("очистка выполненных задач", () => {
  render(<TodoApp />);
  const input = screen.getByPlaceholderText("Добавить новую задача");
  const addButton = screen.getByText("Добавить");

  fireEvent.change(input, { target: { value: "Новая задача" } });
  fireEvent.click(addButton);

  const task = screen.getByText("Новая задача");
  fireEvent.click(task);

  const clearButton = screen.getByText("Очистить выполненные");
  fireEvent.click(clearButton);

  expect(screen.queryByText("Новая задача")).not.toBeInTheDocument();
});
