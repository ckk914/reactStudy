import React from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = () => {
  const { button, icon, badge } = styles;

  return (
    <button className={button}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
