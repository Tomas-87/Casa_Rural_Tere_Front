import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import ImagesAll from "../pages/Imagenes";
import QueVisitar from "../pages/queVisitar/QueVisitar";
import Valderrobres from "../pages/queVisitar/Valderrobres";
import Parrizal from "../pages/queVisitar/Parrizal";
import Pesqueras from "../pages/queVisitar/Pesqueras";
import Layout from "../components/Layout";
import Formulario from "../pages/Contacto";

export default function RoutesCasa({ casa }) {
  return (
    <Routes>
      <Route element={<Layout casa={casa} />}>
        <Route path="/" element={<Home casa={casa} />} />
        <Route path="/imagenes" element={<ImagesAll casa={casa} />} />
        <Route path="/que-visitar" element={<QueVisitar casa={casa} />} />
        <Route path="/reservar" element={<Formulario />} />
        <Route path="/valderrobres" element={<Valderrobres casa={casa} />} />
        <Route path="/parrizal-beceite" element={<Parrizal />} />
        <Route path="/pesqueras" element={<Pesqueras />} />
      </Route>
    </Routes>
  );
}
