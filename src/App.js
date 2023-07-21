import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 9, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e4",
			title: "New Desk(wooden)",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
	];
	
	const addExpenseHandler = (expenseData) => {
		
		console.log(expenseData);
	};

	return (
		<div>
			<h2>Let's get started!</h2>
			<NewExpense onaddExpense={addExpenseHandler} />
			<Expenses ExpensesArr={expenses} />
		</div>
	);
};

export default App;
