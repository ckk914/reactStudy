import React, { useEffect, useState } from "react";
import Player from "./components/Ref/Player";
// import "./App.css";

//bootStrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import TodoTemplate from "./components/Todo/TodoTemplate";

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges"></div>
    </>
  );
};

export default App;
