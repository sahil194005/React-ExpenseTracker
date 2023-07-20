import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
	const SaveExpenseDataHandler = (enteredExpenseData) => {
		const expeseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		console.log(expeseData);
	};

	const addExpenseHandler = (expenseData) => {
		console.log("in expenses");
		console.log(expenseData);
		// expenses.push(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
		</div>
	);
}
export default NewExpense;
