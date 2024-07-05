import React from "react";
import styles from "./EventItem.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";

const EventItem = ({ event }) => {
  const {
    "event-id": id,
    title,
    desc: description, //desc 를 description으로 바꿔줌
    "img-url": image, //img-url을 image로  바꿔줌.
    "start-date": date, //start-date를 date로 바꿔줌
  } = event;
  // const { eventId: id } = useParams();

  const navigate = useNavigate(); //네비게이션 확인


  //이벤트 핸들러는 async로 못만든다! 따로 불러야 된다~!

  const deleteHandler = async (e) => {
    // e.preventDefault();
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    // console.log("id: ", id);
    // Perform delete operation here, e.g., make an API call to delete the event
    await fetch(`http://localhost:8282/events/${id}`, { method: "DELETE" });

    // Navigate to another page after deletion
    navigate("/events");
  };

  return (
    <article className={styles.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
