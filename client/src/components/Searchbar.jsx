import React, { useState, useEffect } from "react";
import Filter from "./Filter";

function Searchbar({ showList, setShowList }) {
  const handleEventbtn = () => {
    setShowList("event");
  };
  const handleGroupbtn = () => {
    setShowList("group");
  };

  return (
    <div className='max-w-4xl mx-auto sticky top-0 z-10 backdrop-blur-lg border-b pt-1 '>
      <div className='flex justify-start my-2 mx-auto px-2'>
        <input
          type='text'
          placeholder='Search...'
          className='py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none'
        />
        <input
          type='text'
          value='Osaka, JP'
          className='py-2 px-4 border border-gray-300 focus:outline-none w-40'
        />
        <button className='bg-purple-500 text-white py-2 px-4 rounded-r-md hover:bg-purple-600'>
          <i className='fas fa-search'></i>
        </button>
      </div>

      <div className='flex gap-0.5 '>
        <button
          className={`w-1/2 h-fit max-w-md mt-2 mb-1 text-2xl text-neutral-800  font-bold transition duration-150 border-b-8 ${
            showList === "group" ? "border-purple-500" : "border-transparent"
          } hover:bg-neutral-300`}
          onClick={() => handleGroupbtn()}
        >
          Groups
        </button>
        <button
          className={`w-1/2 h-fit  max-w-md mt-2 text-2xl text-neutral-800  font-bold transition duration-150 border-b-8 ${
            showList === "event" ? "border-purple-500" : "border-transparent"
          } hover:bg-neutral-300`}
          onClick={() => handleEventbtn()}
        >
          Events
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
