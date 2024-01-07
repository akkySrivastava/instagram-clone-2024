import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing_page/Landing";
import Stories from "./pages/landing_page/Stories";
import Reels from "./pages/landing_page/Reels";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route index path="/insta/stories" element={<Stories />} />
        <Route index path="/insta/reels" element={<Reels />} />
      </Routes>
    </>
  );
}

export default App;
