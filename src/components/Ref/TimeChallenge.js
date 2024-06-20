import React, { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  //타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);
  //타겟 시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  const startHandler = (e) => {
    setTimerStarted(true);
    setTimeout(() => {
      console.log("Game Over");
      setTimerExpired(true);
    }, targetTime * 1000);
  };
    const stopHandler = (e) => {

    };
    
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired &&<p>Yoy lost!</p>}
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={startHandler}>
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
