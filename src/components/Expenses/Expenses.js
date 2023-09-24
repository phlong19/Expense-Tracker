import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItems';
import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map(ex => {
          return (
            <ExpenseItem
              key={ex.id}
              title={ex.title}
              date={new Date(ex.date)}
              amount={ex.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
