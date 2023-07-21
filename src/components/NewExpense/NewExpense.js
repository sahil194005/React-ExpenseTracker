import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
	const SaveExpenseDataHandler = (enteredExpenseData) => {
		const expeseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		props.onaddExpense(expeseData);
	};

	const [FormOpen, setFormOpen] = useState(true);

	

	

	return (
		<div className="new-expense">
			{!FormOpen && <button onClick={()=>setFormOpen(true)}>Add New Expense</button>}
			{FormOpen && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancelHandler={()=>setFormOpen(false)} />}
		</div>
	);
}
export default NewExpense;
