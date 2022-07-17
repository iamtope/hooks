// a  component in react is just a function
import React, { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // hooks should only be called inside compoents functions
  // they cannot be called outside or inside nested functions

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
  }; 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
