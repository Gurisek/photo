import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import Weddings from "./Pages/Portfolio/Weddings";
import Portrety from "./Pages/Portfolio/Portrety";
import NotFound from "./Pages/NotFound";
// import { Wed1 } from "./Pages/Portfolio/Weddings/Wedding/Wed1";
// import { Wed2 } from "./Pages/Portfolio/Weddings/Wedding/Wed2";
// import { Wed3 } from "./Pages/Portfolio/Weddings/Wedding/Wed3";
// import { Wed4 } from "./Pages/Portfolio/Weddings/Wedding/Wed4";
// import { Pers1 } from "./Pages/Portfolio/Personal/Pers1";

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

        {/* rodinne */}
        <Route path="/rodinne" element={<h1>rodinne</h1>} />

        {/* portrety / osobni foceni (domluvit se s terkou ohledne nazvu) */}
        <Route path="/portret" element={<Portrety />} />

        {/* reklamni foceni */}
        <Route path="/reklamni_foceni" element={<h1>reklamni foceni</h1>} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
