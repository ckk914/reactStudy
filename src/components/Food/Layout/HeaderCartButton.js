import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {
  const { cartItems } = useContext(CartContext);
  // 리덕스 사용시
  //curNumber에 누적해서 더해줌
  const totalAmount = cartItems.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // ㅣㅣ
  // const calcTotalAmount = () => {
  //   let totalAmount = 0;
  //   for (const item of cartItems) {
  //     totalAmount += item.amount;
  //   }
  //   return totalAmount;
  // };

  const { button, icon, badge } = styles;

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{calcTotalAmount()}</span>
    </button>
  );
};

export default HeaderCartButton;
