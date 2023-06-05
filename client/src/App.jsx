import { useEffect, useState } from "react";
import Listview from "./components/Listview";
import Searchbar from "./components/Searchbar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Searchbar></Searchbar>
      <Listview></Listview>
    </div>
  );
}

export default App;
