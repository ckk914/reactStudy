import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  // 이벤트 핸들러 선언
  const plusClickHandler = (e) => {
    // console.log("+클릭");
    //useState의 setter는 상태값을 업데이트할때
    //렌더링 전까지 이전 상태값을 참조함
    //ㄴ-그래서 여러개 써봐야 소용없음!⭐️

    //해결 방법: 함수형 업데이트를 사용
    //2씩 증가하게 만들기~! 콜백 쓰고 number=> number+1
    setNumber((prev) => {
      console.log("변경 이전값: ", prev);
      //변경 이후 값을 반환
      return prev + 1;
    });

    setNumber((number) => number + 1);

    //상태값의 변경은 실시간으로 일어나지 않음~!🖐️⭐️
    // ㄴ 해결 방법 : useEffect 훅으로 해결하면 됨~! ()
    console.log("변경 이후값:", number); //이전값이 나옴~!
  };
  //   const minusClickHandler = (e) => {
  //     // console.log("-클릭");
  //     setNumber(number - 1);
  //   };

  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={plusClickHandler}>증가</button>
      <button onClick={(e) => setNumber(number - 1)}>감소</button>
    </div>
  );
};

export default Counter;
