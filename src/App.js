import ExpenseItem from "./components/ExpenseItem";

function App() {
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


	let newArr = expenses.map((expense) => {
		return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />;
	});

	return (
		<div>
			<h2>Let's get started!</h2>
			{newArr}
		</div>
	);
}

export default App;
