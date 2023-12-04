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
        <Route path="/svatba" element={<Weddings />} />
        <Route path="/svatba/1b47h" element={<WedOne />} />
        <Route path="/svatba/1b88a" element={<WedTwo />} />
        <Route path="/svatba/65SB7" element={<Wed3 />} />

        <Route path="/sluzby" element={<Price />} />
        <Route path="/rodinne" element={<h1>rodinne</h1>} />
        <Route path="/portret" element={<h1>portrety</h1>} />
        <Route path="/reklamni_foceni" element={<h1>reklamni foceni</h1>} />
        <Route path="/about" element={<h1>O mně</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
