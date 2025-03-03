
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
 

const ExpenseItem = (props) => {

    
    
return (
    <Card className='expense-item'>
        <div>
         <ExpenseDate date={props.date} />

        </div>
        <div className='expense-item_description'>
            <h2>{props.title}</h2>
            <div className='expense-item_price'> ${props.amount}</div>
        </div>
        
    </Card>  
  )
}
export default ExpenseItem;