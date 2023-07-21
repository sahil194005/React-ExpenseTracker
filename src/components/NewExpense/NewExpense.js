import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {

	const SaveExpenseDataHandler = (enteredExpenseData) => {
		const expeseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		props.onaddExpense(expeseData);
	};


	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
		</div>
	);
}
export default NewExpense;
