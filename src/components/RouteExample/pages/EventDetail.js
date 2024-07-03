import React from "react";
import { useParams } from "react-router-dom";
import EventNavigation from "../layout/EventNavigation";
import { useLoaderData } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();

  const data = useLoaderData();
  console.log("loader data: ", data);

  return (
    <>
      <h1>EventDetail page</h1>
      <p>Event id: {params.Id}</p>
    </>
  );
};

export default EventDetail;
