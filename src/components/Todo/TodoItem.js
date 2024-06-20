import { React, useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";

import "./scss/TodoItem.scss";

const TodoItem = ({ todo, onRemove, onCheck }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { id, text, done } = todo; //구조 편히 쪼갬!!

  //클릭 이벤트 ⭐️
  const checkHandler = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    onCheck(id);
  };

  const onDelete = (e) => {
    e.preventDefault();
    // console.log("샥");
    // console.log(e.target);
    onRemove(id);
  };
  return (
    <li className="todo-list-item">
      <div
        onClick={checkHandler}
        className={`check-circle ${isChecked ? "active" : ""}`}
      >
        {isChecked && <MdDone />}
      </div>
      <span className={`text ${isChecked ? "finish" : ""}`}>{text}</span>
      <div className="remove" onClick={onDelete}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
