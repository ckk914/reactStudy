import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";  //🌈

const HeaderCartButton = ({ onShow }) => {
  //bump 애니메이션을 제어하는 상태 변수
  const [isBump, setIsBump] = useState(false);
  //장바구니 배열 가져오기
  const { cartItems } = useContext(CartContext);  //🌈

  //curNumber에 누적해서 더해줌
  // reduce가 cartItems반복해서 순회
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

  const { button, icon, badge, bump } = styles;

  useEffect(() => {
    // console.log("useEffect 실행");
    if (cartItems.length === 0) return;
    setIsBump(true);
    //애니메이션 실행 후 클래스 제거
    // 추후 재시작을 하기 위함!
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);
    // 애니메이션 실행 후 클래스 제거
    // 추후 재시작을 하기 위함!
    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button className={`${button} ${isBump ? bump : ""}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
