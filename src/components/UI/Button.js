import React from "react";
import "./Button.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
