import React from "react";
import styles from "./EventList.module.scss";
import { Link, useLoaderData } from "react-router-dom";

//링크에는 무조건 스트링 문자가 들어가야함~!~!!~!
const EventList = ({ eventList }) => {
  //   const data = useLoaderData();
  //loader데이터는 loaderfmf 선언한 페이지 밑에있는 하위 컴포넌트 어디서든 사용 가능
  //   const eventList = useLoaderData();
  //   console.log("loader data : ", data); //그냥 받아서 쓸 수 있음

  const { events, list, item, content } = styles; // 스타일즈를 보냄!
  return (
    <div className={events}>
      <h1>All Events</h1>
      <ul className={list}>
        {eventList.map((ev) => (
          <li key={ev.id} className={item}>
            <Link to={ev.id.toString()}>
              <img src={ev['img-url']} alt={ev.title} />
              <div className={content}>
                <h2>{ev.title}</h2>
                <time>{ev.startDate}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
