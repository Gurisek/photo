import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Weddings from "./Pages/Portfolio/Weddings";
import { WedOne } from "./Pages/Portfolio/Weddings/Wedding/WedOne";
import { Price } from "./Pages/Price";
import { WedTwo } from "./Pages/Portfolio/Weddings/Wedding/WedTwo";
import { Wed3 } from './Pages/Portfolio/Weddings/Wedding/Wed3';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/weddings/1b47h" element={<WedOne />} />
        <Route path="/weddings/1b88a" element={<WedTwo />} />
        <Route path="/weddings/65SB7" element={<Wed3 />} />

        <Route path="/price" element={<Price />} />
        <Route path="/personal" element={<h1>personal</h1>} />
        <Route path="/family" element={<h1>family</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
