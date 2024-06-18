import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button";

const Login = ({ onLogin }) => {
  //사용자가 입력한 이메일 상태 관리
  const [enteredEmail, setEnteredEmail] = useState("");
  //이메일 입력 값이 정상인지 유무 확인
  const [emailIsValid, setEmailIsValid] = useState();
  //사용자가 입력한 패스워드를 상태 관리
  const [enteredPassword, setEnteredPassword] = useState("");
  //패스워드 입력값이 정상인지 유무 확인
  const [passwordIsValid, setPasswordIsValid] = useState();
  //이메일, 패스워드가 둘 다 정상인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles.btn}
            disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
