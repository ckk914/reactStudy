import { React, useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";

import "./scss/TodoItem.scss";

const TodoItem = ({ todo, onRemove }) => {
  const [isChecked, setIsChecked] = useState(false);

  const clickEvent = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
  };

  const onDelete = (e) => {
    e.preventDefault();
    // console.log("샥");
    // console.log(e.target);
    onRemove(todo.id);
  };
  return (
    <li className="todo-list-item">
      <div
        onClick={clickEvent}
        className={`check-circle ${isChecked ? "active" : ""}`}
      >
        {isChecked && <MdDone />}
      </div>
      <span className={`text ${isChecked ? "finish" : ""}`}>{todo.text}</span>
      <div className="remove" onClick={onDelete}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
