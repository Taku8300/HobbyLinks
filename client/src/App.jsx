import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import GroupPage from "./pages/GroupPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/group" element={<GroupPage />} /> */}
        <Route path="/group/:groupId" element={<GroupPage />} />
        {/* <Route path="/event" element={<EventPage />} /> */}
        <Route path="/event/:eventId" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
