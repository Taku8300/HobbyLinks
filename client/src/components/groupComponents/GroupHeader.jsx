import React from "react";

function GroupHeader({ imgUrl, title, groupId }) {
  return (
    <div className="flex justify-center mx-auto w-full ">
      <div>
        <img src={imgUrl} alt="" className="max-w-xl" />
      </div>
      <div className="pl-6 border max-w-sm w-full">
        <h1 className="text-3xl font-bold ">
          {title} Dashing Whippets Running Team
        </h1>
        <p>Osaka,Jp</p>
        <p>Members 20</p>
        <p>Created by : User_01</p>
      </div>
    </div>
  );
}

export default GroupHeader;
