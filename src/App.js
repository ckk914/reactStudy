import React from "react";
import Products from "./components/RouteExample/pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/RouteExample/pages/Home";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrPage from "./components/RouteExample/pages/ErrPage";

const router = createBrowserRouter([
  {
    path: "/", // 이동할 경로 path
    element: <RootLayout />, //이동할 페이지
    errorElement: <ErrPage />, //에러 엘리먼트 : 에러가 날때 보여줄 컴포넌트를 설정한다~!⭐️
    children: [
      //Outlet임 여기 애들이 더 늘려서 쓸 수 있음~!
      //자식을 배열로 묶음!
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
