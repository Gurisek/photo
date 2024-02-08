import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Price from "./Pages/Price";
import Weddings from "./Pages/Portfolio/Weddings";
import Portrety from "./Pages/Portfolio/Portrety";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="kontakt" element={<Price />} />
            <Route path="about" element={<h1>O mne</h1>} />
            <Route path="svatba" element={<Weddings />} />
            <Route path="rodinne" element={<h1>rodinne</h1>} />
            <Route path="portret" element={<Portrety />} />
            <Route path="reklamni_foceni" element={<h1>reklamni foceni</h1>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
