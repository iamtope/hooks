import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./NewComponentExpenses.css";

const NewComponentExpenses = (props) => {
  console.log(props.expenses);

  const [year, setYear] = useState("2021");

  const addExpenseFilter = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>No expenses Found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          onSaveExpenseFilter={addExpenseFilter}
        ></ExpenseFilter>
        {expensesContent}
      </Card>
    </div>
  );
};

export default NewComponentExpenses;
