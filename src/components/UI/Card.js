import React from "react";
import "./Card.css";

const Card = ({ className, children }) => {
  const cn = "card " + className;
  return <div className={cn}>{children}</div>;
};

export default Card;
