import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseList.css";
import ExpenseChart from "../chart/ExpenseChart";

const ExpenseList = ({ expenses }) => {
  // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const onFilterChange = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  // 연도로 필터링한 배열
  const filteredExpenses = expenses.filter(
    (ex) => ex.date.getFullYear().toString() === filteredYear
  );
  //월별 돈 정리
  // // filteredExpenses.map((e) => console.log(e.date.getMonth() + 1, e.price));
  // const monthlyExpenses = {};

  // filteredExpenses.forEach((e) => {
  //   const month = e.date.getMonth() + 1;
  //   if (!monthlyExpenses[month]) {
  //     monthlyExpenses[month] = 0;
  //   }
  //   monthlyExpenses[month] += e.price;
  // });
  // console.log("monthlyExpenses:", monthlyExpenses);

  // 지출데이터가 없을 때 보여줄 태그
  let Content = <p>지출 항목이 없습니다.</p>;

  // let pList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // 지출데이터가 있을 때 보여줄 태그
  if (filteredExpenses.length > 0) {
    Content = filteredExpenses.map(({ title, price, date }) => (
      <ExpenseItem
        key={Math.random().toString()}
        title={title}
        price={price}
        date={date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />
      <ExpenseChart expenses={filteredExpenses} />
      {Content}
    </div>
  );
};

export default ExpenseList;
