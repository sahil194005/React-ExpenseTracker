import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {

const [title,setTitle] = useState(props.title)
const [amount,setAmount] = useState(props.amount)

	const clickHandler =  () => {
	 setTitle('Updated')
		
	};

	const priceHandler = (e) => {
		// e.preventDefault();
		// e.target.parentNode.remove();
		setAmount(100)
	};
	return (
		<li>
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
			<button onClick={priceHandler}>Set price to 100</button>
		</Card>
		</li>
	);
};
export default ExpenseItem;
