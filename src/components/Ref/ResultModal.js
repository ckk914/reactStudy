import React, { forwardRef } from "react";

const ResultModalComponent = ({ onReset, targetTime, remainingTime }, ref) => {
  // 패배조건
  const isLost = remainingTime <= 0;

  // 시간 포맷팅
  const formattedRemaningTime = (remainingTime / 1000).toFixed(2);
  //점수
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return (
    <dialog ref={ref} className="result-modal">
      {isLost ? <h2>Your lost!</h2> : <h2>your Win! score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemaningTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>
  );
};

// forwardRef는 콜백으로 전달된 컴포넌트에 첫번째 파라미터로 props를 전달하고
// 두번째 파라미터에는 부모에게 받은 ref를 전달한다.
const ResultModal = forwardRef(ResultModalComponent);

export default ResultModal;
