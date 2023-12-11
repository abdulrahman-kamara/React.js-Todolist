import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the New Expense button", () => {
  render(<App />);
  const newExpenseButton = screen.getByText("Add New Expense");
  expect(newExpenseButton).toBeInTheDocument();
});

test("renders the ExpenseList component", () => {
  render(<App />);
  const expenseList = screen.getByRole("listbox");
  expect(expenseList).toBeInTheDocument();
});

test("renders the ExpenseProduct components", () => {
  render(<App />);
  const expenseList = document.getElementsByTagName("li");
  expect(expenseList.length).toBeGreaterThan(0);
  for (const expense of expenseList) {
    expect(expense.className).toContain("expense-product");
    const title = expense.querySelector(".expense-product__title");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toMatch(/^Expense \d+:/);
    const amount = expense.querySelector(".expense-product__amount");
    expect(amount).toBeInTheDocument();
    expect(amount.textContent).toMatch(/^\d+\.\d+$/);
    const date = expense.querySelector(".expense-product__date");
    expect(date).toBeInTheDocument();
    expect(date.textContent).toMatch(/^\d+/);
  }
});
