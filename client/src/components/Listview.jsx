import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";
import GroupItem from "./GroupItem";
import Events from "../data/Events";
import Group from "../data/Group";
function Listview() {
  const [showList, SetshowList] = useState("");

  const handleEventbtn = () => {
    SetshowList("event");
  };
  const handleGroupbtn = () => {
    SetshowList("group");
  };

  useEffect(() => {
    console.log(showList);
  }, [showList]);
  return (
    <div className=" max-w-5xl mx-auto">
      <div className="flex gap-0.5 ">
        <button
          className={`w-1/2 h-fit max-w-md mt-2 mb-1 text-2xl text-neutral-800  font-bold transition duration-150 border-b-8 ${
            showList === "group" ? "border-purple-500" : "border-transparent"
          } hover:bg-gray-300`}
          onClick={() => handleGroupbtn()}
        >
          Groups
        </button>
        <button
          className={`w-1/2 h-fit  max-w-md mt-2 text-2xl text-neutral-800  font-bold transition duration-150 border-b-8 ${
            showList === "event" ? "border-purple-500" : "border-transparent"
          } hover:bg-gray-300`}
          onClick={() => handleEventbtn()}
        >
          Events
        </button>
      </div>
      {showList === "event" ? eventlist() : grouplist()}
    </div>
  );
}

function eventlist() {
  return Events.map((e) => (
    <EventItem imgUrl={e.imgUrl} desc={e.desc} title={e.title} />
  ));
}

function grouplist() {
  return Group.map((e) => (
    <GroupItem imgUrl={e.imgUrl} desc={e.desc} title={e.title} />
  ));
}

export default Listview;
