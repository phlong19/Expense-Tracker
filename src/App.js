import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Cup of Coffee',
    amount: 274.13,
    date: new Date(2023, 9, 13),
  },
  {
    id: 2,
    title: 'A spacecraft',
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
    title: 'Chinese Virus',
    amount: 78.5,
    date: new Date(2019, 11, 3),
  },
  {
    id: 5,
    title: 'Water Bottle',
    amount: 150,
    date: new Date(2022, 10, 19),
  },
  {
    id: 6,
    title: 'Courses',
    amount: 32,
    date: new Date(2020, 8, 12),
  },
  {
    id: 7,
    title: 'A pair of glasses',
    amount: 100,
    date: new Date(2023, 4, 16),
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
