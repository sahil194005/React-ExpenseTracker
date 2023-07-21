import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
	let ExpensesArr = props.expenses.map((expense) => {
		return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
	});

	if (props.expenses.length === 0) {
		return <h2 className="expenses-list__fallback"> Found no expenses</h2>;
	}

	return <ul className="expenses-list">{ExpensesArr}</ul>;
};

export default ExpensesList;
