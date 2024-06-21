import React from "react";
import styles from "./input.module.scss";

function Input({ label }) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input />
    </div>
  );
}

export default Input;
