import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faMapLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function EventDesc({ desc, date, type, address, prefecture }) {
  //handle Join event ptn
  const [joined, setJoined] = useState(false);
  const handleJoinEventBtn = () => {};
  return (
    <div className="mx-auto mt-10 max-w-4xl w-full">
      <div className="flex">
        <div className="flex mb-2 align-middle gap-2">
          <FontAwesomeIcon icon={faCalendar} size="xl" />
          <h1 className=" text-xl">{date}</h1>
          <br />
          <FontAwesomeIcon icon={faMapLocationDot} size="xl" />
          <h2 className="text-xl">{address}</h2>
        </div>

        <button
          className={` font-bold text-xl px-5 py-2.5 text-center m-2 ml-10 ${
            joined
              ? "text-white bg-red-500 hover:bg-red-800 hover:border-red-600 border-red-400 border-b-4 rounded-lg"
              : "text-white bg-purple-500 hover:bg-purple-800 hover:border-purple-600 border-purple-400 border-b-4 rounded-lg"
          }`}
          onClick={handleJoinEventBtn}
        >
          {joined ? "Leave This Event" : "Join This Group"}
        </button>
      </div>

      <div className="mt-5 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Descriptions</h1>
        <p className="font-normal mb-2">{desc}</p>
      </div>

      <div className=" ">
        <h1 className="text-3xl font-bold">Attendees List</h1>
        {/* query all the event from this group */}
        <div className="flex gap-1 justify-center items-center bg-slate-100 max-w-4xl w-full h-52 mt-2 border-slate-200 rounded-md">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUserGroup} size="2xl" />
            <p className="font-thin">No Attendees</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Map</h1>
      </div>
    </div>
  );
}

export default EventDesc;
