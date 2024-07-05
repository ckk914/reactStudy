import React from "react";

import styles from "./EventForm.module.scss";
import { useNavigate, Form, redirect } from "react-router-dom";

const EventForm = ({ method, event = {} }) => {
  const {
    title,
    desc: description,
    "img-url": image,
    "start-date": date,
  } = event;

  // 날짜 형식을 변경 (yyyy-MM-dd)
  /**
   *
   * @param date - yyyy년 MM월 dd일
   */
  const convertDateFormat = (date) => {
    const [yearPart, monthDayPart] = date.split("년 ");
    const [monthPart, dayPart] = monthDayPart.split("월 ");

    const day = dayPart.replace("일", "");

    // console.log('date: ', { yearPart, monthPart, day });

    return `${yearPart}-${monthPart}-${day}`;
  };

  let formatDate;
  if (event.date) {
    formatDate = convertDateFormat(date);
  }

  // const { eventId: id } = useParams();
  const navigate = useNavigate();

  const cancelHandler = (e) => {
    // window.location.href = '/events/' + id;
    // navigate('/events/' + id);
    navigate("..");
  };

  // const submitHandler = e => {
  //   e.preventDefault();
  //   // console.log('form이 제출됨!');

  //   // input에 입력한 값 가져오기
  //   const formData = new FormData(e.target);
  //   // console.log('form: ', formData.get('title'));

  //   // 서버에 보낼 데이터
  //   const payload = {
  //     title: formData.get('title'),
  //     desc: formData.get('description'),
  //     imageUrl: formData.get('image'),
  //     beginDate: formData.get('date')
  //   };

  //   // console.log('payload: ', payload);

  //   // 서버로 페칭
  //   (async () => {
  //     const response = await fetch(`http://localhost:8282/events`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(payload)
  //     });

  //     navigate('/events');
  //   })();
  // };

  // 2. action함수를 트리거하려면 일반 form을 사용하면 안되고
  // 3. react-router-dom에서 제공하는 Form이라는 컴포넌트를 사용한다.
  // 4. method 옵션을 설정한다.
  return (
    <Form
      method={method}
      className={styles.form}
      // onSubmit={submitHandler}
      noValidate
    >
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? formatDate : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? description : ""}
        />
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>{method === "post" ? "Save" : "Modify"}</button>
      </div>
    </Form>
  );
};

export default EventForm;

// 서버에 갱신요청을 보내는 트리거함수
// App.js에서 router에 설정
export const action = async ({ request, params }) => {
  // action 함수를 트리거하는 방법
  // 1. form이 있는 EventForm으로 이동
  // console.log('action함수 call!');

  // console.log('req: ', request);

  const formData = await request.formData();
  // console.log(formData);

  const payload = {
    title: formData.get("title"),
    desc: formData.get("description"),
    imageUrl: formData.get("image"),
    beginDate: formData.get("date"),
  };

  // console.log(payload);

  let url = `http://localhost:8282/events`;
  if (request.method === "PATCH") {
    url += `/${params.eventId}`;
  }

  console.log("info: ", { url, method: request.method });

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/events");
};
