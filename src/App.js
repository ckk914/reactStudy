import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/RouteExample/pages/Home";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrPage from "./components/RouteExample/pages/ErrPage";
import Events from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";

const router = createBrowserRouter([
  {
    path: "/", // 이동할 경로 path
    element: <RootLayout />, //이동할 페이지
    errorElement: <ErrPage />, //에러 엘리먼트 : 에러가 날때 보여줄 컴포넌트를 설정한다~!⭐️
    children: [
      //Outlet임 여기 애들이 더 늘려서 쓸 수 있음~!
      //자식을 배열로 묶음!
      { index: true, element: <Home /> }, //빈 페이지 패스 보다 index: true 가 낫다 ⭐️ index : true  => 부모 주소 사용한다~!

      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            //이 페이지가 열릴 때 자동으로 트리거 되어 호출되는 함수
            // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다
            loader: async () => {
              // console.log("loader call!!!"); //열릴떄마다 실행
              const response = await fetch("http://localhost:8282/events");
              const jsondata = await response.json();
              console.log(jsondata); //백엔드가 준 데이터
              return jsondata;

              //loader가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트를
              //언제든 불ㄹ러서 사용할 수 있다~!
            },
          },
          { path: ":Id", element: <EventDetail /> },
          { path: "new", element: <NewEvent /> },
        ],
      },

      // { path: "products", element: <Products /> }, //알아서 /base/products로 간다
      // { path: "products/:prodId/page/:pageNo", element: <ProductDetail /> },  // :prodId 와 :pageNo 는 동적 라우트 파라미터 ⭐️
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
