import React from "react";
import "./scss/TodoHeader.scss";
import { format } from "date-fns";

const TodoHeader = ({ todoCount }) => {
  const today = new Date();
  const formattedDate = format(today, "yyyy년 M월 d일");
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][today.getDay()];
  return (
    <header>
      <h1>{formattedDate}</h1>
      <div className="day">{dayOfWeek}요일</div>
      <div className="tasks-left">할 일 {todoCount}개 남음</div>
    </header>
  );
};

export default TodoHeader;
