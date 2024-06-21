import React from "react";
import styles from "./cart.module.scss";
import CartModal from "./CartModal";

const DUMMY_CART = [
  {
    id: "c1",
    name: "스시",
    amount: 2,
    price: 46000,
  },
  {
    id: "c2",
    name: "띠드버거",
    amount: 1,
    price: 12000,
  },
];
const Cart = () => {
  const {
    "cart-items": cartItemStyle,
    total,
    actions,
    "button--alt": btnAlt,
    button,
  } = styles;

  return (
    <CartModal>
      {/* 주문 내역 */}
      <ul className={cartItemStyle}>
        {DUMMY_CART.map((cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>58,000원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt}>닫기</button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;
