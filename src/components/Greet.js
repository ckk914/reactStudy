// import React from "react";   //생략 가능

import Card from "./UI/Card";

//  ccc.children; : 태그 사이에 있는 것들/

const Greet = (ccc) => {
  return (
    <>
      <Card className="border-green">
        <h1>
          hello React!
          {ccc.children}
        </h1>
      </Card>
    </>
  );
};
export default Greet;
