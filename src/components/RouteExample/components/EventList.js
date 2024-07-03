import React from "react";
import styles from "./EventList.module.scss";
import { Link } from "react-router-dom";

//링크에는 무조건 스트링 문자가 들어가야한ㅁ~!~!!~!
const EventList = ({ eventList }) => {
  const { events, list, item, content } = styles; // 스타일즈를 보냄!
  return (
    <div>
      <h1>All Events</h1>
      <ul className={list}>
        {eventList.map((event) => (
          <li key={event.id} className={item}>
            <Link to={event.id.toString()}>
              <img src={event.image} alt={event.title} />
              <div className={content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
