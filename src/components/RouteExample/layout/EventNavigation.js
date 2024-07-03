import React from "react";
import styles from "./EventNavigation.module.scss";
import { NavLink } from "react-router-dom";

const EventsNavigation = () => {
  const activeClassFn = ({ isActive }) => {
    return isActive ? styles.active : undefined;
  };
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/events" className={activeClassFn} end>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={activeClassFn}>
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
