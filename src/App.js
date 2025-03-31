import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import StoryList from "./components/StoryList";
import AnnStory from "./components/AnnStory"; // Import Ann's Story
import NoureenStory from "./components/NoureenStory"; // Import Noureen's Story
import ManaviStory from "./components/ManaviStory"; // Import Manavi's Story
import AiyyapanStory from "./components/AiyyapanStory"; // Import Aiyyapan's Story
import OmkarStory from "./components/OmkarStory"; // Import Omkar's Story

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<StoryList />} />
        <Route path="/story/1" element={<NoureenStory />} />  {/* Route for Ann */}
        <Route path="/story/2" element={<ManaviStory />} />  {/* Route for Manavi */}
        <Route path="/story/3" element={<AiyyapanStory />} />  {/* Route for Aiyyapan */}
        <Route path="/story/4" element={<OmkarStory />} />  {/* Route for Omkar */}
        <Route path="/story/5" element={<AnnStory />} />  {/* Route for Ann */}
      </Routes>
    </Router>
  );
}

export default App;
