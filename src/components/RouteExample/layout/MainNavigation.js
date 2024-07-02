import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
