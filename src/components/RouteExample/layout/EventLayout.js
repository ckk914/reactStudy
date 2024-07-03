import React from "react";
import EventsNavigation from "./EventNavigation";
import { Outlet } from "react-router-dom";

const EventLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
      {/* 자식들아울렛으로 전체 소환~! */}
    </>
  );
};

export default EventLayout;
