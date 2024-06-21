import React from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [], //장바구니 배열
};
//리듀서 reducer : 여러가지 복잡한 상태 관리를 단순화 시키며 중앙 집중화 한다.
//
// 리듀서 함수 정의
// param 목록
//state: 업데이트 이전의 상태값
//action : 어떤 업데이트를 하는지 정보와 업데이트에 필요한 값을 가진 객체
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //장바구니 추가
    return null; // 새로운 상태
  } else if (action.type === "REMOVE") {
    //장바구니 제거

    return null; //새로운 상태
  }
  return defaultState; //새로운 상태
};

const CartProvider = ({ children }) => {
  //프로바이더가 실제로관리할 상태들의 구체적인 내용들
  const CartContext = {
    cartItem: [], //상태값
    addItem: (item) => {}, //상태를 업데이트 하는 함수
    removeItem: (id) => {}, //상태를 업데이트 하는 함수
  };

  return (
    <CartContext.Provider value={CartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
