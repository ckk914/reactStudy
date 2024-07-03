import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";

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
  const [eventList, setEventList] = useState([]);
  // useEffect 안에 fetch 를 하고 2번 파라미터 [] 로 하면 1번만 실행~!
  // fetch를 밖에서 꺼내면 무한 실행됨!(과금 주의!!)

  // `fetchEvents` 함수는 서버에서 이벤트 데이터를 가져와서 상태 변수
  //`eventList`에 저장하는 역할을 합니다.
  //`useEffect` 훅을 사용하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정되어 있습니다.
  useEffect(() => {
    //즉시 실행 후 바로 하게 함
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:8282/events");
      const jsondata = await response.json();
      setEventList(jsondata);
    };
    fetchEvents();
    //  위처럼 바뀜
    // fetch("http://localhost:8282/events")
    //   .then((response) => response.json())
    //   .then((jsondata) => {
    //     console.log(jsondata);
    //     setEventList(jsondata); //상태 변수로 데이터 저장⭐️
    //   });
  }, []);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;
