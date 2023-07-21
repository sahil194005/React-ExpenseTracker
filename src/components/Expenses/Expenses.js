import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

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
			<ExpensesChart expenses={FilteredArr} />
			<ExpensesList expenses={FilteredArr} />
		</Card>
	);
};

export default Expenses;
