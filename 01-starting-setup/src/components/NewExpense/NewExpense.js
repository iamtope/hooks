import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
     return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
     </div>
};


export default NewExpense;