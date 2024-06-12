import "./App.css";
import React from "react";
import Hello from "./components/Hello"; //리액트는 .js 생략!
import Bye from "./components/Bye";
import Greet from "./components/Greet";
import ExpenseItem from "./components/expenses/ExpenseItem";

const App = () => {
  // jsx 문법 => 바로 태그 쓸 수 있는 문법 ⭐️
  // const $h2 = React.createElement("h2", null, "ㅎㅇㅎㅇ");
  const $h2 = <h2>ㅎㅇㅎㅇㅎㅇ</h2>; //{$h2} 로 갖다가 씀
  // jsx 규칙
  // 1. return 안에 있느 태그는 반드시 하나의 태그로 묶여야함
  // 2. 빈 태그(닫는 태그가 없는)는 반드시 />로 마감 (막아야함)
  // 3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  //     ㄴ렌더링 때는 알아서 class로 나옴!
  //4. 의미없는 부모는 <React.Fragment>로 묶으면 root 밑에 바로 들어간다! 축약 : <> </> 으로 감싸면됨.,!
  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
  // 에러 로그는 터미널에 표시됨~!⭐️
  return (
    <>
      <ExpenseItem />
      <ExpenseItem />
    </>
  );
};

export default App;
