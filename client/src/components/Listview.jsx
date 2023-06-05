import React from "react";
import ListviewItem from "./ListviewItem";

function Listview() {
  return (
    <div className="bg-red-300 max-w-4xl mx-auto">
      <button className="w-1/2 border">Groups</button>
      <button className="w-1/2 border">Events</button>
      {ListviewItem()}
    </div>
  );
}

export default Listview;
