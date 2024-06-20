import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  // timer를 ref변수로 관리
  const timer = useRef();

  // stop을 눌렀을 때 남은시간을 상태값으로 관리
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // 자식컴포넌트 ResultModal에 있는 dialog태그의 참조를 만듬
  const dialog = useRef();

  //start stop 활성화 조건
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // 시간이 타임오버되었을 때 처리
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  const startHandler = (e) => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);

  };

  const stopHandler = (e) => {
    clearInterval(timer.current);
    dialog.current.showModal();
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        result="lost"
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? stopHandler : startHandler}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
