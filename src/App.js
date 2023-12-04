import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Weddings from "./Pages/Portfolio/Weddings";
import { WedOne } from "./Pages/Portfolio/Weddings/Wedding/WedOne";
import { Price } from "./Pages/Price";
import { WedTwo } from "./Pages/Portfolio/Weddings/Wedding/WedTwo";
import { Wed3 } from "./Pages/Portfolio/Weddings/Wedding/Wed3";
import Personal from "./Pages/Portfolio/Personal";
import { Pers1 } from "./Pages/Portfolio/Personal/Pers1";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* ostatni odkazy */}
        <Route path="/" element={<Home />} />
        <Route path="/sluzby" element={<Price />} />
        <Route path="/about" element={<h1>O mně</h1>} />

        {/* Svatby */}
        <Route path="/svatba" element={<Weddings />} />
        <Route path="/svatba/1b47h" element={<WedOne />} />
        <Route path="/svatba/1b88a" element={<WedTwo />} />
        <Route path="/svatba/65SB7" element={<Wed3 />} />

        {/* rodinne */}
        <Route path="/rodinne" element={<h1>rodinne</h1>} />

        {/* portrety / osobni foceni (domluvit se s terkou ohledne nazvu) */}
        <Route path="/portret" element={<Personal />} />
        <Route path="/portret/98J6F" element={<Pers1 />} />

        {/* reklamni foceni */}
        <Route path="/reklamni_foceni" element={<h1>reklamni foceni</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
