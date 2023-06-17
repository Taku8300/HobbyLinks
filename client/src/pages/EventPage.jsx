import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Group from "../data/Group";
import Events from "../data/Events";
import Header from "../components/Header";
import EventHeader from "../components/eventComponents/EventHeader";
import EventDesc from "../components/eventComponents/EventDesc";

function EventPage() {
  const { eventId } = useParams();
  // Define the values in state
  const eventDetails = {
    imgUrl: Events[eventId].imgUrl,
    title: Events[eventId].title,
    desc: Events[eventId].desc,
    groupId: eventId,
    Group: Group[eventId],
  };

  return (
    <>
      <Header />
      <div className=' min-h-screen bg-slate-50'>
        <div className='flex flex-col mb-2 mx-auto max-w-5xl bg-white px-10 py-5 shadow-lg min-h-screen'>
          <EventHeader imgUrl={eventDetails.imgUrl} title={eventDetails.title} />
          <EventDesc desc={eventDetails.desc} />
        </div>
      </div>
    </>
  );
}

export default EventPage;
