import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import Weddings from "./Pages/Portfolio/Weddings";
import Portrety from "./Pages/Portfolio/Portrety";
import NotFound from "./Pages/NotFound";
import Reklamni from "./Pages/Portfolio/Reklamni";
import About from './Pages/About';
import Rodinne from "./Pages/Portfolio/Rodinne";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="kontakt" element={<Price />} />
            <Route path="about" element={<About />} />
            <Route path="svatba" element={<Weddings />} />
            <Route path="rodinne" element={<Rodinne />} />
            <Route path="portret" element={<Portrety />} />
            <Route path="propagacni" element={<Reklamni/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
