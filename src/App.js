// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Player from "./pages/Player";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/play" element={<Player />} />
      </Routes>
    </main>
  );
}

export default App;
