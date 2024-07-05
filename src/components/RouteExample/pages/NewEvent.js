import React from "react";
import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";


const NewEvent = () => {
  return <EventForm method="post" />;
};

export default NewEvent;

//서버에 갱신 요청을 보내는 트리거 함수
//App.js에서 router에 설정해야 함
export const action = async ({ request }) => {
  // * action 함수를 트리거 하는 방법
  // 1. form이 있는 eventForm으로 이동
  // 2. action 함수를 트리거 하려면 일반 form을 사용 하면 안되고
  // 3. react- router-dom에서 제공하는 form이라는 컴포넌트를 사용한다.⭐️ (예=> eventForm.js에서 FORM)
  // 4. method 옵션을 설정한다. post 줘도 action 트리거 됨.

  const formData = await request.formData(); //async 안에서는 await 쓰면 await으로 추출
  console.log(formData);
  // console.log("action함수 call!~");
  // console.log("abc: ", abc);
  const payload = {
    title: formData.get("title"),
    desc: formData.get("description"),
    imageUrl: formData.get("image"),
    beginDate: formData.get("date"),
  };

  const response = await fetch(`http://localhost:8282/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  //use가 이름에 앞에 붙으면 리액트 훅이라 함~!
  //컴포넌트 안에서만 use 사용 가능
  return redirect("/events");
};
