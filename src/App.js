import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import Sluzby from "./Pages/Sluzby";
import Weddings from "./Pages/Portfolio/Weddings";
import Portrety from "./Pages/Portfolio/Portrety";
import NotFound from "./Pages/NotFound";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            {/* ostatni odkazy */}
            <Route path="/" element={<Home />} />
            <Route path="/kontakt" element={<Price />} />
            <Route path="/about" element={<h1>O mně</h1>} />
            <Route path="/sluzby" element={<Sluzby />} />

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
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;