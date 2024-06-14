import React from "react";
import "./CourseItem.css";

const CourseItem = ({ item, onDelete }) => {
  const deleteHandler = (e) => {
    console.log("del");
    console.log(item.id);
    onDelete(item.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {item.text}
    </li>
  );
};

export default CourseItem;
