import React from "react";

function GroupItem() {
  return (
    <div className="flex flex-col  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:flex-row">
      <img
        src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
        alt=""
        className="w-52 rounded-md"
      />
      <div className="flex flex-col justify-start pt-2 px-4">
        <h5 className="mb-1 text-xl font-medium text-neutral-800 ">
          Group Name
        </h5>
        <h2 className=" text-md font-semibold text-amber-500">Osaka,Japan</h2>
        <p className=" text-base text-neutral-600 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          delectus repudiandae fugiat saepe animi sed dolores, a, unde ea
          nostrum minima iure soluta nulla numquam veritatis quod modi, nam
          quia!
        </p>
        <p className="mb-2 text-sm text-neutral-400 text-right">20 Members</p>
      </div>
    </div>
  );
}

export default GroupItem;
