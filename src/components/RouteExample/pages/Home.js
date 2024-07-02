import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  console.log("home!");
  return (
    <>
      <h1>my home page</h1>;
      <p>
        <Link to="/products">products</Link>페이지로 이동하기
      </p>
    </>
  );
};

export default Home;
