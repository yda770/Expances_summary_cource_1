import { useState } from 'react';

import './Expenses.css';
import Expenses from "./components/Expenses/Expenses.js";
import expensesData from "./components/Expenses/ExpensesData.js";
import NewExpense from "./components/NewExpense/NewExpense.js";


function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
