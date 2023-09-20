import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
