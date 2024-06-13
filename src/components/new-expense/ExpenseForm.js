import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //입력칸에 있는 3개의 값을 상태값으로 관리
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);

  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  //제목이 입력되었을 때 발생하는 이벤트 핸들러
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  //가격이 입력되었을 때 발생하는 이벤트 핸들러
    const priceChangeHandler = (e) => {
         setPrice(e.target.value);
  };
  //날짜가 입력되었을 때 발생하는 이벤트 핸들러
    const dateChangeHandler = (e) => {
         setDate(e.target.value);
  };

  //폼 전송 이벤트 핸들러
  const submitHandler = (e) => {
    e.preventDefault(); //ㅅ
    console.log("폼이 전송됨!");

    const NewExpense = {
      title,
      price,
      date,
    };
    console.log(NewExpense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getTodayDate()}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
