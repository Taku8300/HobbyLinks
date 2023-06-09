import React from "react";

function GroupItem({ imgUrl, title, desc, setMainsection }) {
  const handleClick = () => {
    setMainsection((prev) => (prev === "details" ? "list" : "details"));
  };
  return (
    <div
      className="flex flex-col  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:flex-row border-b-2 mb-1 cursor-pointer"
      onClick={handleClick}
    >
      <img src={imgUrl} alt="" className=" w-56 rounded-md" />
      <div className="flex flex-col justify-start pt-2 px-4">
        <h5 className="mb-1 text-xl font-medium text-neutral-800 ">{title}</h5>
        <h2 className=" text-md font-semibold text-amber-500">Osaka,Japan</h2>
        <p className=" text-base text-neutral-600 ">{desc}</p>
        <p className="mb-2 text-sm text-neutral-400 text-right">20 Members</p>
      </div>
    </div>
  );
}

export default GroupItem;
