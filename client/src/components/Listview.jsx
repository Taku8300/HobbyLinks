import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";
import GroupItem from "./GroupItem";
import Events from "../data/Events";
import Group from "../data/Group";

function Listview({ showList, setMainsection }) {
  return (
    <div className=" max-w-5xl mx-auto overflow-y-auto">
      {showList === "event"
        ? eventlist(setMainsection)
        : grouplist(setMainsection)}
    </div>
  );
}

function eventlist(setMainsection) {
  return Events.map((e) => (
    <EventItem
      imgUrl={e.imgUrl}
      desc={e.desc}
      title={e.title}
      setMainsection={setMainsection}
    />
  ));
}

function grouplist(setMainsection) {
  return Group.map((e) => (
    <GroupItem
      imgUrl={e.imgUrl}
      desc={e.desc}
      title={e.title}
      setMainsection={setMainsection}
    />
  ));
}

export default Listview;
