import React, { createContext } from "react";

// 장바구니에 관련된 상태값들을 관리하는 컨텍스트(=저장소)
// 매개변수에 전달하는 객체는 상태들을 정의하는 개념
// ㄴ 인터페이스 처럼 정의하는 곳⭐️
const CartContext = createContext({
  cartItems: [], // 장바구니 배열
  addItem: (item) => {}, // 장바구니에 추가하는 함수
  removeItem: (id) => {}, // 장바구니에 상품을 제거하는 함수
});

export default CartContext;
