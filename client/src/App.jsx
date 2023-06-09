import { useEffect, useState } from "react";
import Listview from "./components/Listview";
import Searchbar from "./components/Searchbar";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [showList, setShowList] = useState("group");

  useEffect(() => {
    console.log(showList);
  }, [showList]);

  return (
    <div className="bg-neutral-200 min-h-screen ">
      <Header></Header>
      <div className="max-w-7xl mx-auto grid grid-cols-12  ">
        <div className="col-span-2 sticky top-0">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-8 ">
          <Searchbar setShowList={setShowList} showList={showList}></Searchbar>
          <Listview showList={showList}></Listview>
        </div>
        <div className="col-span-2 px-4">
          <Map></Map>
        </div>
      </div>
    </div>
  );
}

export default App;
