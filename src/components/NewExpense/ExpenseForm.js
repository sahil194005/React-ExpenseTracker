import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	
	const [userInput, SetUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	const titleChangeHandler = (e) => {
		SetUserInput((prevState) => {
			return { ...prevState, enteredTitle: e.target.value };
		});
	};

	const amountChangeHandler = (e) => {
		SetUserInput((prevState) => {
			return { ...prevState, enteredAmount: e.target.value };
		});
	};

	const dateChangeHandler = (e) => {
		SetUserInput((prevState) => {
			return { ...prevState, enteredDate: e.target.value };
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: userInput.enteredTitle,
			amount: userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};
		props.onSaveExpenseData(expenseData); 
		SetUserInput({
			enteredTitle: "",
			enteredAmount: "",
			enteredDate: "",
		});
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label className="new-expense__control label"> Expense Title</label>
					<input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}></input>
				</div>
				<div className="new-expense__control">
					<label> Expense Amount</label>
					<input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
				</div>
				<div className="new-expense__control">
					<label> Expense Date </label>
					<input type="date" value={userInput.enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}></input>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
