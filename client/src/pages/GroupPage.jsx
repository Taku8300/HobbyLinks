import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Group from "../data/Group";
import Events from "../data/Events";
import GroupHeader from "../components/groupComponents/GroupHeader";
import About from "../components/groupComponents/About";
import EventsSection from "../components/groupComponents/EventsSection";
import Photo from "../components/groupComponents/Photo";

function GroupPage() {
  const { groupId } = useParams();
  // Define the values in state
  const groupDetails = {
    imgUrl: Group[groupId].imgUrl,
    title: Group[groupId].title,
    desc: Group[groupId].desc,
    groupId: groupId,
    events: Events[groupId],
  };

  return (
    <div className=" min-h-screen">
      {/* btnsection */}
      <Header />
      <GroupHeader
        groupId={groupId}
        imgUrl={groupDetails.imgUrl}
        title={groupDetails.title}
      />
      <About desc={groupDetails.desc} />

      <EventsSection events={groupDetails.events} />
      <Photo />
    </div>
  );
}

export default GroupPage;
