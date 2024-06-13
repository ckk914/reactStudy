import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSave }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAdd={onSave} />
    </div>
  );
};

export default NewExpense;
