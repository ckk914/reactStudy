import React from "react";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      //바뀔 컴포넌트들 (아래만 계속 바뀌는 식)
      {/* RootLayout의 children들이 아울렛으로 렌더링됨 */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
