import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function EventHeader({ imgUrl, title, user, group_name }) {
  const imgPath = `http://localhost:8000${imgUrl}`;

  const [joined, setJoined] = useState(false);
  const handleJoinEventBtn = () => {};
  return (
    <div className="mx-auto">
      <div className="mt-2">
        <h1 className="text-md font-medium text-amber-600">{group_name}</h1>
        <h1 className="text-3xl font-medium">{title}</h1>
        <div className="flex justify-between my-2">
          <div>
            <div className=" py-2 flex gap-1 max-w-sm items-center">
              <img
                className="w-14 h-14 rounded-full border-4 border-slate-50 object-cover"
                src="https://www.kindacode.com/wp-content/uploads/2022/05/cute.jpeg"
              />
              <div>
                <p className=" text-md font-bold">Hosted by</p>
                <h2 className=" text-lg "> {user}</h2>
              </div>
            </div>
          </div>

          <button
            className={` font-bold text-xl px-4 py-2 text-center h-12 ${
              joined
                ? "text-white bg-red-500 hover:bg-red-800 hover:border-red-600 border-red-400  border-b-4 rounded-lg"
                : "text-white bg-purple-500 hover:bg-purple-800 hover:border-purple-600 border-purple-400  border-b-4  rounded-lg"
            }`}
            onClick={handleJoinEventBtn}
          >
            {joined ? "Leave This Event" : "Join This Event"}
          </button>
        </div>
      </div>

      <div className="flex justify-center ">
        <img src={imgPath} alt="" className="max-w-4xl h-[400px] w-[890px]" />
      </div>
    </div>
  );
}
