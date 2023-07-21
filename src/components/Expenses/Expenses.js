import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";


const Expenses = (props) => {
	
	let ExpensesArr = props.ExpensesArr.map((expense) => {
		return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
	});
	return <Card className="expenses">{ExpensesArr}</Card>;
};

export default Expenses;
