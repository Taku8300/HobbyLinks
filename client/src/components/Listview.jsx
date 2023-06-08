import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";
import GroupItem from "./GroupItem";
import Events from "../data/Events";
import Group from "../data/Group";
import Filter from "./Filter";
function Listview({ showList }) {
  return (
    <div className=' max-w-5xl mx-auto overflow-y-auto'>
      <Filter></Filter>
      {showList === "event" ? eventlist() : grouplist()}
    </div>
  );
}

function eventlist() {
  return Events.map((e) => <EventItem imgUrl={e.imgUrl} desc={e.desc} title={e.title} />);
}

function grouplist() {
  return Group.map((e) => <GroupItem imgUrl={e.imgUrl} desc={e.desc} title={e.title} />);
}

export default Listview;
