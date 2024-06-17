import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/Modal/ErrorModal";

const AddUsers = ({ onAddUser }) => {
  //에러 상태 관리 (에러 제목, 에러 내용)
  const [error, setError] = useState(null);

  const [userValue, setUserValue] = useState({
    username: "",
    age: "",
  });

  const usernameChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      username: e.target.value,
    }));
  };

  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      age: e.target.value,
    }));
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    // 입력값 검증
    if (userValue.username.trim() === "" || userValue.age.trim() === "") {
      setError({
        title: "유효하지 않은 입력값",
        message: "입력값은 공백으로 작성하면 안됩니다.",
      });
      return;
    }

    if (+userValue.age < 1) {
      setError({
        title: "유효하지 않은 나이 범위",
        message: "나이는 0이나 음수 불가능합니다.",
      });
      return;
    }

    onAddUser(userValue);

    setUserValue({
      username: "",
      age: "",
    });
  };

  //   하위 컴포넌트 ErrorModal에게 모달을 닫는 조건을 수행하는 함수 전달
  const ModalCloseHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={ModalCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={userValue.username}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={userValue.age}
          />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
