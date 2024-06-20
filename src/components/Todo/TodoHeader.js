import React from "react";
import "./scss/TodoHeader.scss";
import { format } from "date-fns";

const TodoHeader = ({ todoCount }) => {
  const today = new Date();

  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <header>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {todoCount}개 남음</div>
    </header>
  );
};

export default TodoHeader;
