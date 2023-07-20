import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
	const clickHandler = () => {
		console.log("clicked");
	};
	const deleteHandler=(e)=>{
		e.preventDefault();
		e.target.parentNode.remove()
	}
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
			<button onClick = {deleteHandler}>Delete Expense</button>
		</Card>
	);
};
export default ExpenseItem;
