import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<h1>Portfolio</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/price" element={<h1>Price</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
