import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	let FilteredArr = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let ExpensesArr = FilteredArr.map((expense) => {
		return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
	});

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{ExpensesArr}
		</Card>
	);
};

export default Expenses;
