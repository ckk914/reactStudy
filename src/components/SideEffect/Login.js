import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button";

// 리듀서 함수
/*
  이 컴포넌트의 모든 상태와 상태변경을 중앙제어하는 함수
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하므로
  컴포넌트 바깥쪽에 선언하는게 일반적입니다.

  param1 - state : 변경 전의 상태값
  param2 - action : dispatch함수(상태변경 등의 행동)가 
                    전달한 상태변경객체, 
                    지금 어떤 상태값을 변경하는가? - type
                    어떤 값으로 변경하는지?        - value
  return : 변경 후의 상태값
*/

const emailReducer = (state, action) => {
  // console.log('email reducer call!!');
  // console.log('state: ', state);  // 변경 전 상태객체
  // console.log('action: ', action); // 지금 상태변경이 일어난 객체

  if (action.type === "USER_INPUT") {
    return {
      inputValue: action.val,
      isVaild: action.val.includes("@"),
    };
  } else if (action.type === "VALIDATE") {
    return {
      inputValue: state.inputValue,
      isVaild: state.inputValue.includes("@"),
    };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      inputValue: action.val,
      isVaild: action.val.trim().length > 6,
    };
  } else if (action.type === "VALIDATE") {
    return {
      inputValue: state.inputValue,
      isVaild: state.inputValue.trim().length > 6,
    };
  }
};

const Login = ({ onLogin }) => {
  // console.log('렌더링 수행!');

  // email reducer로 이메일 상태관리하기
  /*
    param1: 위에서 만든 리듀서 함수
    param2: 상태값의 초기값
    return: 리듀서를 관리하는 배열
        [0]: 이메일 관련 상태값
        [1]: 상태를 변경할 수 있는 함수 
  */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    inputValue: "",
    isValid: null,
  });
  // console.log('abc: ', abc);
  // console.log('변경 후 이메일상태: ', emailState);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    inputValue: "",
    isValid: null,
  });

  // 이메일, 패스워드가 둘 다 정상인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    // setEnteredEmail(e.target.value);

    // reducer의 상태 변경은 반드시 dispatch함수를 통해 처리
    // dispatch 호출시 리듀서함수가 호출됨.

    // param1: 리듀서 함수의 action에 전달할 내용
    dispatchEmail({
      type: "USER_INPUT",
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({
      type: "VALIDATE",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "VALIDATE",
    });
  };

  // 로그인 버튼을 눌렀을 때 이벤트 핸들러
  const submitHandler = (e) => {
    e.preventDefault();
    // App.js에서 받은 로그인핸들러 호출
    onLogin(emailState.inputValue, passwordState.inputValue);
  };

  // emailState와 passwordState에서 isValid 추출
  const { isVaild: emailIsValid } = emailState;
  const { isVaild: passwordIsValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("useEffect call in Login.js");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    // clean up함수는 컴포넌트가 업데이트되거나 사라지기 전에 실행
    return () => {
      // console.log('cleanup: ', enteredEmail);
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  // console.log('render: ', enteredEmail);

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${!emailIsValid ? styles.invalid : ""}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.inputValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            !passwordIsValid ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.inputValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
