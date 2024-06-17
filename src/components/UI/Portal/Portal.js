import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, destId }) => {
  return ReactDOM.createPortal(children, document.getElementById(destId));
};

export default Portal;
