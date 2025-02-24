import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manufacturing from "./pages/Manufacturing";
import RealEstate from "./pages/RealEstate";
import Contact from "./pages/Contact";
import Architects from "./pages/Architects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/architects" element={<Architects />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
