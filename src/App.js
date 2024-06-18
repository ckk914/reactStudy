import React, { useRef, useState } from "react";
import "./App.css";
import MainHeader from "./components/SideEffect/MainHeader";
import Home from "./components/SideEffect/Home";
import Login from "./components/SideEffect/Login";

const App = () => {
  
  //현재 로그인 상태를 체크하는 변수
  const [isLoggedIn, setIsloggedIn] = useState(false);
  
  console.log('로그인 검사 수행!');
  //localStorage에서 로그인 플래그를 꺼냄!
  // 로그인 검사를 초기에 수행
  const storedLoginFlag = loginHandler.getItem('login-flag');
  //로그인 검사를 초기에 수행
  if (storedLoginFlag === '1')
    //상태변수가 setter로 변경되면
    //리액트는 변경 감지 후 바로 리렌더링 수행!
    {setIsloggedIn(true);}
  // 서버 통신은 중앙 집중 관리가 중요함~!⭐️
  const loginHandler = (email,password) => {
    //로그인의 증거로 클라이언트에 기록 (1이라는 숫자 기록)
    //로컬스토리지에 저장
    localStorage.setItem('login-flag', 1);
    setIsloggedIn(true);
  };


  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home /> }
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;
