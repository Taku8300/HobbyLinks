import React from "react";
import EventItem from "./EventItem";
import GroupItem from "./GroupItem";

function Listview() {
  return (
    <div className="bg-red-300 max-w-4xl mx-auto">
      <button className="w-1/2 border">Groups</button>
      <button className="w-1/2 border">Events</button>
      {GroupItem()}
      <div className="border-b-2"></div>
      {EventItem()}
    </div>
  );
}

export default Listview;
