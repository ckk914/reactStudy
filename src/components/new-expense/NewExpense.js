import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSave }) => {
  const [toggle, setToggle] = useState(false);

  const startInsertModeHandler = () => setToggle(true);
  const stopInsertModeHandler = () => setToggle(false);

  let newExpenseContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  if (toggle)
    newExpenseContent = (
      <ExpenseForm onAdd={onSave} onCancel={stopInsertModeHandler} />
    );

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
