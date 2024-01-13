import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing_page/Landing";
import Stories from "./pages/landing_page/Stories";
import Reels from "./pages/landing_page/Reels";
import Profile from "./pages/landing_page/Profile";
import Explore from "./pages/landing_page/Explore";
import Posts from "./pages/landing_page/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route index path="/insta/reels" element={<Reels />} />
        <Route index path="/insta/explore" element={<Explore />} />
        <Route index path="/insta/stories/:username" element={<Stories />} />
        <Route index path="/insta/user/:username" element={<Profile />} />
        <Route index path="/insta/posts/p/:post_id" element={<Posts />} />
        <Route index path="/insta/reels/r/:reels_id" element={<Reels />} />
      </Routes>
    </>
  );
}

export default App;
