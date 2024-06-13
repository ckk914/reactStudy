import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({ expenses }) => {
  //내려보냈다가 날짜 가져올 것
  const onFilterChange = (year) => {
    //ExpenseFilter에 있는 선택된 연도값을 여기서 출력!
    console.log(year);
  };
  //on을 이름 앞에 붙이면 함수라는 의미

  return (
    <div className="expenses">
      <ExpenseFilter onFilter={onFilterChange} />
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </div>
  );
};

export default ExpenseList;
