import React from "react";
import { useParams } from "react-router-dom";
import EventNavigation from "../layout/EventNavigation";


const EventDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>EventDetail page</h1>
      <p>Event id: {params.Id}</p>
    </>
  );
};

export default EventDetail;
