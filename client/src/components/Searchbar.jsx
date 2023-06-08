import React from "react";

function Searchbar() {
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="flex justify-start my-4 mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none  focus:border-transparent w-60 "
        />
        <input
          type="text"
          value="Osaka, JP"
          className="py-2 px-4 border border-gray-300 focus:outline-none  focus:border-transparent w-60"
        />
        <button className="bg-purple-500 text-white py-2 px-4 rounded-r-md hover:bg-purple-600">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="flex justify-start gap-1 mx-auto">
        <select
          name="Day"
          className="py-2 px-4  border border-gray-300 rounded-sm focus:outline-none  focus:border-transparent"
        >
          <option value="">Day</option>
        </select>
        <select
          name="Type"
          className="py-2 px-4  border border-gray-300 rounded-sm focus:outline-none  focus:border-transparent"
        >
          <option value="">Type</option>
        </select>
        <select
          name="Distance"
          className="py-2 px-4  border border-gray-300 rounded-sm focus:outline-none  focus:border-transparent"
        >
          <option value="">Distance</option>
        </select>
        <select
          name="Category"
          className="py-2 px-4  border border-gray-300 rounded-sm focus:outline-none  focus:border-transparent"
        >
          <option value="">Category</option>
        </select>
        <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
