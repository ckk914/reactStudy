import React, { forwardRef } from "react";

const ResultModalComponent = ({ result, targetTime, remainingTime }, ref) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>Your {result}!</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{remainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

// forwardRef는 콜백으로 전달된 컴포넌트에 첫번째 파라미터로 props를 전달하고
// 두번째 파라미터에는 부모에게 받은 ref를 전달한다.
const ResultModal = forwardRef(ResultModalComponent);

export default ResultModal;
