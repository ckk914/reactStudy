import React, { useRef, useState } from "react";

// let timer;

const TimerChallenge = ({ title, targetTime }) => {
  // 타이머 관련 해결 방법
  //timerfmf ref 변수로 관리
  const timer = useRef(); //각각의 타이머로 관리됨~!

  //타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);
  //타겟 시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  const startHandler = (e) => {
    timer.current = setTimeout(() => {
      console.log("Game Over");
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  //=================================================
  //case1. 지역변수 timer 일때
  //이 상황에 stop이 작동 하지 않는 이유
  // start시 timer변수가 지역변수이기 때문에
  // 상태 변수의 setter 호출 시 리 렌더링 되면서
  // 새로운 지역 변수로 바뀜
  // stop 시 timer와 start 시의 timer는 다른 변수이다.
  //=================================================
  //case2. 전역변수로 timer 설정
  // 5초 -> 1초 -> 1초 > 5초 연속 클릭해보면
  // 5초짜리 timer 가 정상 작동하지 않는 이유는
  // 4개의 TimeChallenge 컴포넌트가 1개의 timer를 공유하여
  // 처음 5초 짜리 timer가 1초 짜리에 의해 덮어씌워지기 때문
  //=================================================

  const stopHandler = (e) => {
    console.log("stop!");
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Yoy lost!</p>}
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? stopHandler : startHandler}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
