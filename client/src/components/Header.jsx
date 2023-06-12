import React from "react";
import { Link } from "react-router-dom";

function Header({ setMainsection }) {
  return (
    <Link
      to={`/`}
      className="flex justify-start gap-5 align-top mx-auto sticky top-0 z-20 max-w-screen-2xl  py-2 bg-white shadow-md"
    >
      <div className="font-bold text-2xl cursor-pointer">HobbyLinks</div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <input
          type="text"
          value="Osaka, JP"
          className="py-2 px-4 border  border-gray-300 focus:outline-none"
        />
        <button className="bg-purple-500 text-white py-2 px-4 rounded-r-md hover:bg-purple-600">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div></div>
    </Link>
  );
}

export default Header;
