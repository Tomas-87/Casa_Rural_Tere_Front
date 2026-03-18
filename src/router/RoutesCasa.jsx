import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import ImagesAll from "../pages/Imagenes";

export default function RoutesCasa({ casa }) {
  return (
    <Routes>
      <Route path="/" element={<Home casa={casa} />} />
      <Route path="/imagenes" element={<ImagesAll casa={casa} />} />
    </Routes>
  );
}
