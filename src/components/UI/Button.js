import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
