import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../UI/Button";

const CourseInput = ({ onAdd }) => {
  console.log("s: ", styles);
  const { invalid, "form-control": formControl } = styles;
  const [enteredText, setEnteredText] = useState("");

  //입력값 검증을 통과했는지 여부를 상태 관리
  const [isValid, setIsValid] = useState(true);

  //제출 클릭 이벤트
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newGoalObject = {
      id: Math.random().toString(),
      text: enteredText,
    };
    // console.log(newGoalObject);

    onAdd(newGoalObject);

    setEnteredText("");
  };
  //변화 이벤트
  const goalChangeHandler = (e) => {
    const inputValue = e.target.value;
    //입력값 검증
    if (inputValue.trim().length > 0) {
      setIsValid(true); //유효
    }
    setEnteredText(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${formControl} ${!isValid && invalid}`}>
        <label>나의 목표</label>
        <input type="text" onChange={goalChangeHandler} value={enteredText} />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
