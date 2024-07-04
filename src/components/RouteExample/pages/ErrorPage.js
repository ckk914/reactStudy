import React from "react";
import MainNavigation from "../layout/MainNavigation";
import { useRouteError } from "react-router-dom";
import EventsNavigation from "../layout/EventNavigation";

const ErrorPage = () => {
  // 에러가 발생했을 때 throw에 전달한 객체를 읽는 방법
  const error = useRouteError();

  let errorMessage = "서버와의 연결이 원활하지 않습니다.";

  if (error.status === 400) {
    errorMessage = error.data.message;
    // console.log(errorMessage);
  }

  if (error.status === 404) {
    errorMessage = "페이지를 찾을 수 없습니다. URL을 확인하세요!";
  }

  return (
    <>
      <MainNavigation />
      <EventsNavigation />
      <main>
        <h1>에러가 발생했습니다!</h1>
        <p>{errorMessage}</p>
      </main>
    </>
  );
};

export default ErrorPage;
