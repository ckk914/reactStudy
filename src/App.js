import React, { useEffect, useState } from "react";
import Player from "./components/Ref/Player";
import TimerChallenge from "./components/Ref/TimeChallenge";
// import "./App.css";

//bootStrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import TodoTemplate from "./components/Todo/TodoTemplate";

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
};

export default App;
