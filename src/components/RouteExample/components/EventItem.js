import React from "react";
import styles from "./EventItem.module.scss";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  const {
    title,
    desc: description,
    "img-url": image,
    "start-date": date,
  } = event;

  return (
    <article className={styles.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <Link to="edit">Edit</Link>
        <button>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
