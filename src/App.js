import React, { useState } from "react";
import Header from "./components/Food/Layout/Header";
import Meals from "./components/Food/Meals/Meals";
import Cart from "./components/Food/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  // 장바구니 모달을 열고 닫는 상태변수
  const [cartIsShown, setCartIsShown] = useState(false);

  // 모달을 열어주는 핸들러
  const showCartHandler = () => setCartIsShown(true);

  // 모달을 닫아주는 핸들러
  const hideCartHandler = () => setCartIsShown(false);

  return (
    // 프로바이더로 묶인 애들은 자식 컴포넌트에서 사용할 수 있는 상태를 공유해줌
    // 장바구니 상태를 공유해줌
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <div id="main">
        <Meals />
      </div>
    </CartProvider>
  );
};

export default App;
