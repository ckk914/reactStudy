import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";
import { useLoaderData } from "react-router-dom";

const Events = () => {
  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();
  console.log(eventList);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;

//loader를 app.js로 부터 아웃소싱

export const loader = async () => {
  //이 페이지가 열릴 때 자동으로 트리거 되어 호출되는 함수
  // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다
  // console.log("loader call!!!"); //열릴떄마다 실행
  const response = await fetch("http://localhost:8282/events?sort=date");

  if (!response.ok) {
    const errorText = await response.text();
    throw new Response(JSON.stringify({ message: errorText }), {
      status: response.status,
    });
    // return response; //bad
  }
  return response; //ok일 경우 eveints[]

  // const jsondata = await response.json();
  // console.log(jsondata); //백엔드가 준 데이터

  //loader가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트를
  //언제든 불ㄹ러서 사용할 수 있다~!

  //로더에서 페치의 결과를 바로 리턴하면알아서 제이슨을 추출해줌

};
