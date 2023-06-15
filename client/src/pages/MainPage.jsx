import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Listview from "../components/Listview";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainPage() {
  const [showList, setShowList] = useState("group");
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto grid grid-cols-12">
        <div className="col-span-11">
          <Searchbar setShowList={setShowList} showList={showList} />
          <Listview showList={showList} />
        </div>

        <Map></Map>
      </div>
    </div>
  );
}

export default MainPage;
