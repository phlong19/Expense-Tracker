import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Winter Shopping',
    amount: 274.13,
    date: new Date(2023, 9, 22),
  },
  {
    id: 2,
    title: 'Old Laptop',
    amount: 600,
    date: new Date(2022, 5, 7),
  },
  {
    id: 3,
    title: 'Toilet Paper',
    amount: 150.43,
    date: new Date(2021, 7, 11),
  },
  {
    id: 4,
    title: 'Some Books',
    amount: 78.5,
    date: new Date(2019, 11, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
