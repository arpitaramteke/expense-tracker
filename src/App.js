import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

  let Manual_Data = [
    {
      title:"Bike Expense",
      amount: "300",
      date: new Date(2024, 9, 29)
    },
    {
      title:"car Expense",
      amount: "2200",
      date: new Date(2024, 9, 29) 
    },

    {
      title:" Laptop Expense",
      amount: "200",
      date: new Date(2024, 9, 29)
    },
    {
      title:"Phone Expense",
      amount: "80",
      date: new Date(2024, 9, 29)
    }
  
  ]

  function App() {

    const [expenses, setExpenses] = useState(Manual_Data);

  const saveExpenseData = (expense) =>{
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
  }

  return (
    <>
    <NewExpense onSaveData = {saveExpenseData} />
    <Expenses item={expenses} />
    
  </>
  );
 }

export default App;
