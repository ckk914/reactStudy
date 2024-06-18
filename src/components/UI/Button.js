import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, className, disabled, children }) => {
  return (
    <button
      type={type || "button"}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
