import { useState } from "react"
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value) 
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        console.log(expenseData)

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("")
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
        <h1>Expense Details</h1> 
        <div className="new-expense_control">
        <label>Title:</label><br></br>
        <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense_control">
        <label>Amount:</label><br></br>
        <input type='number' value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense_control">
        <label>Date:</label><br></br>
        <input type='date' value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
        <div className='new-expense_action'>
        <button type='submit'>Add Expense</button>
        </div>
        </div>
        
    </form>
  )
}

export default ExpenseForm