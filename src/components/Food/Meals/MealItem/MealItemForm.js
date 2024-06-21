import React, { useRef } from "react";
import Input from "../../../UI/Input/Input";
import styles from "./MealItemForm.module.scss";

const MealItemForm = ({ id, onAddToCart }) => {
  //선택한 수량값
  // const [amount, setAmount] = useState(0);

  //선택한 수량 값 가져오기
  const inputRef = useRef();

  //수량 선택 시 실행되는 핸들러
  const submitHandler = (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
    console.log("amount:", amount);

    onAddToCart(amount);
  };
  //아래꺼는 그냥 input이 아니라 컴포넌트이다.
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="수량"
        inputAttr={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
