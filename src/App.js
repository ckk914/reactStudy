import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/RouteExample/pages/Home";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrPage from "./components/RouteExample/pages/ErrPage";
import Events from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";

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
          { index: true, element: <Events /> },
          { path: ":Id", element: <EventDetail /> },
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
