import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  // 사용범위가 본인컴포넌트와 그 하위 컴포넌트(children은 하위가 아님)
  // const ev = useLoaderData(); // 자신의 loader를 불러옴

  const ev = useRouteLoaderData("event-detail"); // 부모의 loader를 불러오는 훅

  return <EventItem event={ev} />;
};

export default EventDetail;

export const loader = async ({ params }) => {
  const { eventId: id } = params;

  // console.log('abc: ', abc.params.eventId);

  // use로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능
  // const { eventId: id } = useParams();
  //                          ㄴ 주소에 있는 것을 읽는다~!
  // const [ev, setEv] = useState({});

  const response = await fetch(`http://localhost:8282/events/${id}`);

  if (!response.ok) {
    // ... 예외처리
  }
  // console.log(await response.json());
  return await response.json();
};
