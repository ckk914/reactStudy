import React from "react";
import Header from "./components/Food/Layout/Header";
import Meals from "./components/Food/Meals/Meals";
import Cart from "./components/Food/Cart/cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Cart />
      <Header />
      <div id="main">
        <Meals />
      </div>
    </CartProvider>
  );
};

export default App;
