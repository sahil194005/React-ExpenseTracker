import "./ExpenseForm.css";
const ExpenseForm = () => {
	const titleChangeHandler = (e)=>{
		console.log(e.target.value)
	}
	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label className="new-expense__control label"> Expense Title</label>
					<input type="text" onChange={titleChangeHandler}></input>
				</div>
				<div className="new-expense__control">
					<label> Expense Amount</label>
					<input type="number" min="0.01" step="0.01"></input>
				</div>
				<div className="new-expense__control">
					<label> Expense Date </label>
					<input type="date" min="2019-01-01" max="2022-12-31"></input>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;