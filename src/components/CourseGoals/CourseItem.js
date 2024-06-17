import React from "react";
import styles from "./CourseItem.module.css"; //css 선언과 동시 변수에 할당

const CourseItem = ({ item, onDelete }) => {
  const deleteHandler = (e) => {
    console.log("del");
    console.log(item.id);
    onDelete(item.id);
  };

  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {item.text}
    </li>
  );
};

export default CourseItem;
