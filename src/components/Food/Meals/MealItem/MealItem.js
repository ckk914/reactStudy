import React from "react";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, price, description, name }) => {
  const { meal, description: desc, price: priceStyle } = styles;

  const formatPrice = new Intl.NumberFormat("ko-KR").format(price);

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
