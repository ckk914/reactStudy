import React, { useEffect, useState, useRef } from "react";
import EventList from "../components/EventList";
import EventSkeleton from "../components/EventSkeleton";

// npm install loadsh
import { debounce, throttle } from "lodash";

const Events = () => {
  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();
  // console.log(eventList);

  // 이벤트 목록 아래 박스 참조
  const skeletonBoxRef = useRef();

  // 서버에서 가져온 이벤트 목록
  const [events, setEvents] = useState([]);

  // 로딩 상태 체크
  const [loading, setLoading] = useState(false);

  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1);

  // 더이상 가져올 데이터가 있는지 확인
  const [isFinish, setIsFinish] = useState(false);

  // 로딩 스켈레톤 스크린을 보여줄 개수
  const [skeletonCount, setSkeletonCount] = useState(4);

  // 서버로 목록 조회 요청보내기
  const loadEvents = async () => {
    if (isFinish) {
      console.log("loading finished!");
      return;
    }

    console.log("start loading...");
    setLoading(true);

    const response = await fetch(
      `http://localhost:8282/events/page/${currentPage}?sort=date`
    );
    const { events: loadedEvents, totalCount } = await response.json();

    console.log("loaded: ", {
      loadedEvents,
      totalCount,
      len: loadedEvents.length,
    });

    // console.log('loaded: ', loadedEvents);

    const updatedEvents = [...events, ...loadedEvents];
    setEvents(updatedEvents);
    setLoading(false);
    // 로딩이 끝나면 페이지번호를 1 늘려놓는다.
    setCurrentPage((prevPage) => prevPage + 1);
    console.log("end loading!!");

    // 로딩이 끝나면 더 이상 가져올게 있는지 여부를 체크한다.
    setIsFinish(totalCount === updatedEvents.length);

    // 로딩 후 지금까지 불러온 데이터 개수(현재 렌더링된 개수)를 총 데이터 개수에서 차감
    const restEventsCount = totalCount - updatedEvents.length;

    // skeleton 개수 구하기 -> 남은 개수가 4보다 크면 4로 세팅 4보다 작으면 그 수로 세팅
    const skeletonCnt = Math.min(4, restEventsCount);
    setSkeletonCount(skeletonCnt);
  };

  // 초기 이벤트 1페이지 목록 가져오기
  // useEffect(() => {
  //   loadEvents();
  // }, []);

  // 스크롤 핸들러
  // const scrollHandler = throttle(() => {
  //   if (loading ||
  //     window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
  //   ) {
  //     return;
  //   }
  //   loadEvents();
  // }, 2000);

  // 스크롤 이벤트 바인딩
  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler);

  //   return () => {
  //     window.removeEventListener('scroll', scrollHandler);
  //     scrollHandler.cancel(); // 스로틀 취소
  //   }
  // }, [currentPage, loading]);

  // 화면에 특정 박스가 보이면 다음 페이지를 로딩
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      //현재 감시하고 있는 타겟의 정보 (배열)
      // console.log("entries: ", entries);
      //서버에서 데이터 페칭
      //로딩중이거나 다 가져왔으면 리턴
      // !entries[0].isIntersecting 관찰하고 있는 박스가 감지되지 않으면!
      if (!entries[0].isIntersecting || loading || isFinish) {
        loadEvents();
      }
      loadEvents();
    }, {
      //관찰하고 있는 
      threshold:0.5
    });

    // observer 관찰 대상(DOM)을 지정
    if (skeletonBoxRef.current) {
      observer.observe(skeletonBoxRef.current);
    }

    // 컴포넌트가 렌더링이 사라질 때 옵저빙 중지
    return () => {
      if (skeletonBoxRef.current) {
        observer.disconnect();
      }
    };
  }, [loading, currentPage]);

  return (
    <>
      <EventList eventList={events} />
      <div
        ref={skeletonBoxRef}
        style={{ height: "300px", background: "yellow" }}
      >
        {loading && <EventSkeleton count={skeletonCount} />}
      </div>
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱
// export const loader = async () => {

//   const response = await fetch('http://localhost:8282/events/page/1?sort=date');

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw json(
//       { message: errorText },
//       {
//         status: response.status
//       }
//     );
//   }
//   return response; // ok일 경우 events[]
// };
