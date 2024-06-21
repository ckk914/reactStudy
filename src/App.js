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
