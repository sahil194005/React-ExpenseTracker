
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	let FilteredArr = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpensesList expenses={FilteredArr} />
		</Card>
	);
};

export default Expenses;
