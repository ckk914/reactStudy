import "./App.css";
import React from "react";
import Hello from "./components/Hello"; //리액트는 .js 생략!
import Bye from "./components/Bye";
import Greet from "./components/Greet";
import ExpenseItem from "./components/expenses/ExpenseItem";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";
import CheckBoxStyle from "./components/practice/CheckBoxStyle";

const App = () => {
  // jsx 문법 => 바로 태그 쓸 수 있는 문법 ⭐️
  // const $h2 = React.createElement("h2", null, "ㅎㅇㅎㅇ");
  const $h2 = <h2>ㅎㅇㅎㅇㅎㅇ</h2>; //{$h2} 로 갖다가 씀
  // jsx 규칙
  // 1. return 안에 있는 태그는 반드시 하나의 부모 태그로 묶여야함

  // 2. 빈 태그(닫는 태그가 없는)는 반드시 />로 마감 (막아야함)

  // 3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서
  //                                className으로 표기
  //     ㄴ렌더링 때는 알아서 class로 나옴!

  //4. 의미없는 부모는 <React.Fragment>로 묶으면
  //     root 밑에 바로 태그가 들어간다!
  //        축약: <> </> 으로 감싸면됨., !

  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  // 에러 로그는 터미널에 표시됨~!⭐️
  // props 보낼때 문자열은 중괄호 생략 가능한데 다른 타입은 {} 써야함~!

  //서버에서 지출 항목 json 배열을 응답 받음
  const expenses = [
    {
      title: "치킨 먹음",
      price: 30000,
      date: new Date(2024, 6 - 1, 3),
    },

    {
      title: "족발 먹음",
      price: 40000,
      date: new Date(2023, 12 - 1, 7),
    },
    {
      title: "헬스장 등록",
      price: 50000,
      date: new Date(2024, 6 - 1, 11),
    },
    {
      title: "파파존스피자",
      price: 26000,
      date: new Date(2022, 3 - 1, 14),
    },
    // {
    //   title: "파리채",
    //   price: 2300,
    //   date: new Date(2023, 5 - 1, 3),
    // },
  ];
  //ExpenseForm에게 내려보낼 함수
  const onAddExpense = (userInput) => {
    console.log("App.js가 내려보낸 함수 호출!");
    // console.log(userInput);

    expenses.push(userInput);
    console.log(expenses);
  };

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;
