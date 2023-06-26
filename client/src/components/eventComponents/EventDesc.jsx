import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function EventDesc({ desc, date, type, address, prefecture }) {
  return (
    <div className="mx-auto mt-10">
      <div className="flex mb-2 align-middle gap-2">
        <FontAwesomeIcon icon={faClock} size="xl" />
        <h1 className=" text-xl">{date}</h1>
      </div>

      <div className="flex mb-4 align-middle gap-2">
        <FontAwesomeIcon icon={faMapLocationDot} size="xl" />
        <h2 className="text-xl">{address}</h2>
      </div>

      <div className="mt-5 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Descriptions</h1>
        <p className="font-normal mb-2">
          {" "}
          {desc} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Doloremque odit animi voluptates nulla ullam nemo tempore eius, quod
          temporibus labore iusto, aperiam blanditiis aut consequuntur hic
          fugiat dolore iure veritatis.
        </p>
      </div>

      <div className="">
        <h1 className="text-3xl font-bold">Atendee list</h1>
        <div className="flex gap-1 bg-slate-300 max-w-2xl h-[200px] w-full"></div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Map</h1>
      </div>
    </div>
  );
}

export default EventDesc;
