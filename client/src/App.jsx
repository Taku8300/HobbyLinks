import { useEffect, useState } from "react";
import Listview from "./components/Listview";
import Searchbar from "./components/Searchbar";
import Map from "./components/Map";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-12  gap-5 ">
        <div className="col-span-2 bg-red-200">1</div>
        <div className="col-span-8 ">
          <Searchbar></Searchbar>
          <Listview></Listview>
        </div>
        <div className="col-span-2">
          <Map></Map>
        </div>
      </div>
    </div>
  );
}

export default App;
