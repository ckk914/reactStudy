import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditPage = () => {
  const ev = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={ev} />;
};

export default EditPage;
