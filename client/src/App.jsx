import { useEffect, useState } from "react";
import Listview from "./components/Listview";
import Searchbar from "./components/Searchbar";
import Map from "./components/Map";

function App() {
  return (
    <div className="">
      <div>
        <Searchbar></Searchbar>
        <Listview></Listview>
      </div>
    </div>
  );
}

export default App;
