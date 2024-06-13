import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({ expenses }) => {
  // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력!
    console.log("ExpenseList: ", filteredYear);
    setFilteredYear(filteredYear);
  };

  // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
  // const convertToComponentArray = () => {
  //   return expenses
  //         .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
  // };

  return (
    <div className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />

      {expenses
        .filter((ex) => ex.date.getFullYear().toString() === filteredYear)
        .map((ex) => (
          <ExpenseItem
            key={Math.random().toString()} //실제 태그에는 안그려짐
            title={ex.title}
            price={ex.price}
            date={ex.date}
          />
        ))}
    </div>
  );
};

export default ExpenseList;
