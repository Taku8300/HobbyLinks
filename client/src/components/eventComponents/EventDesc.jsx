import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faMapLocationDot,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function EventDesc({ desc, date, type, address, prefecture }) {
  return (
    <div className="mx-auto mt-10">
      <div className="flex mb-2 align-middle gap-2">
        <FontAwesomeIcon icon={faCalendar} size="xl" />
        <h1 className=" text-xl">{date}</h1>
      </div>

      <div className="flex mb-4 align-middle gap-2">
        <FontAwesomeIcon icon={faMapLocationDot} size="xl" />
        <h2 className="text-xl">{address}</h2>
      </div>

      <div className="mt-5 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Descriptions</h1>
        <p className="font-normal mb-2">
          {desc} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Doloremque odit animi voluptates nulla ullam nemo tempore eius, quod
          temporibus labore iusto, aperiam blanditiis aut consequuntur hic
          fugiat dolore iure veritatis.
        </p>
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
