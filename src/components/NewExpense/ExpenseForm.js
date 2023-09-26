import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: '',
  // });

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value,
    //   };
    // });
  };

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  };

  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // child communicate up to parent
    props.onSaveExpenseData(expense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder="expense title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2022-01-01"
            max="2023-22-9"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Change now</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
