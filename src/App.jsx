import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGame />} />
          <Route path="/play-game" element={<PlayGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
