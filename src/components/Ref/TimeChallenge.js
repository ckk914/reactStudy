import React, { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  //타이머가 시작되었는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = useState(false);
    const startHandler = e => {
        setTimerStarted(true);
    };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={startHandler}>{timerStarted ? "Stop" : "Start"} Challenge</button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
