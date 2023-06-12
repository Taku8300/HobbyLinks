import React from "react";

function GroupHeader({ imgUrl, title, groupId }) {
  return (
    <div className="flex ">
      <div>
        <img src={imgUrl} alt="" className="w-48" />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default GroupHeader;
