import { React, useState } from "react";
import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Dummy_Expenses = [
  {
    id: "1",
    title: "House",
    amount: "$435.54",
    date: new Date(2021, 7, 12),
  },
  {
    id: "11",
    title: "Bred",
    amount: "$435.4",
    date: new Date(2021, 3, 12),
  },
  {
    id: "2",
    title: "Shop",
    amount: "$43.54",
    date: new Date(2021, 2, 12),
  },
  {
    id: "6",
    title: "Money",
    amount: "$435.88",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpense = (expense) => {
    //we get our prevexpenses by react

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses product={expenses} />
    </div>
  );
}

export default App;
