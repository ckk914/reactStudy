import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";
import { useLoaderData } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: 1,
    title: "여름맞이 이벤트",
    description: "여름맞이 이벤트입니다. 재밌겠지?",
    image:
      "https://m.puroluna.com/file_data/iffl8888/2019/06/18/e6a78ac2fbfa26acf240feb86380a47f.jpg",
    date: "2024-07-20",
    createdAt: "2024-07-03T09:34:52.501046",
  },
  {
    id: 2,
    title: "건강관리 이벤트",
    description: "건강 이벤트입니다. 건강하겠지?",
    image:
      "https://www.nhis.or.kr/static/alim/paper/oldpaper/202109/assets/images/sub/event01_mo.jpg",
    date: "2024-07-15",
    createdAt: "2024-07-03T09:35:23.220732",
  },
];

const Events = () => {
  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();
  // console.log(eventList);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;
