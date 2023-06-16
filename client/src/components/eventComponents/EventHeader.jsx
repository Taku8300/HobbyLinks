import React from "react";

export default function EventHeader({ imgUrl, title }) {
  return (
    <div className="">
      <div>
        <h1 className="text-4xl">{title}</h1>
        <h2>Created by: User_01</h2>
      </div>
      <div>
        <img src={imgUrl} alt="" className="max-h-96" />
      </div>
    </div>
  );
}
