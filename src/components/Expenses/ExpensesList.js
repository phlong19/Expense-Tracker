import ExpenseItem from './ExpenseItems';
import './ExpenseList.css';

const ExpenseList = props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(ex => (
        <ExpenseItem
          key={ex.id}
          title={ex.title}
          date={new Date(ex.date)}
          amount={ex.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
