import React, { useState } from "react"; //여기에 useState를 추가함! 간추리려고할때
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, price: exPrice }) => {
  //useState는 컴포넌트의 상태값을 관리하며
  // 이 상태값은 렌더링에 영향을 미침ㄱ
  /*
  -useState훅의 리턴값은 배열
   첫번째 요소는 관리할 상태값의 초기값 = 상태값
   두번째 요소는 해당 상태값을 변경할때 사용하는 setter 함수 = 상태값 변경 함수
  */
  // const abc = React.useState(title); //파라미터로 초기값 설정
  // const abc = useState(title); //파라미터로 초기값 설정
  const [itemTitle, setItemTitle] = useState(title); //파라미터로 초기값 설정
  // console.log("abc: ", abc);
  // 변수 선언
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = exPrice;

  // 함수 선언

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, "0");
  };

  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(exPrice);
  //태그가 안그려져서 쓸수가 없다~!⭐️
  // const $btn = document.getElementById("btn");
  // console.log("btn: ", $btn);
  // 이벤트 핸들러 선언
  const clickHandler = (e) => {
    // console.log("클릭함!");
    // console.log(e.target.previousElementSibling.firstElementChild.textContent);
    // title = "하하호호111";
    // console.log("title:", title);
    // const $price = document.querySelectorAll(`.expense-item__price`);
    // console.log($price);
    /*
     useState가 관리하는 상태값은 반드시 setter로만 변경해야합니다⭐️
    
    */
    setItemTitle("짜장면먹음");
    // const setTitle = abc[1]; //setter 함수는 1번
    // abc[0] = "하하호호123";
    // setTitle("핳핳핳123"); //1번을 활용해서 바꿔줘야함
    // 바꾸고 나면 렌더링을 알아서 1회 수행함🌟
  };

  console.log("렌더링전");
  return (
    <Card className="expense-item">
      <ExpenseDate exDate={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>

      <button id="btn" onClick={clickHandler}>
        제목수정
      </button>
    </Card>
  );
};

export default ExpenseItem;
