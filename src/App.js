import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Weddings from "./Pages/Portfolio/Weddings";
import { WedOne } from "./Pages/Portfolio/Weddings/Wedding/WedOne";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/weddings/1b47h" element={<WedOne />} />

        <Route path="/personal" element={<h1>personal</h1>} />
        <Route path="/family" element={<h1>family</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/price" element={<h1>Price</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
