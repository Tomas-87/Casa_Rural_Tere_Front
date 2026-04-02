import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import ImagesAll from "../pages/Imagenes";
import QueVisitar from "../pages/queVisitar/QueVisitar";
import Valderrobres from "../pages/queVisitar/Valderrobres";
import Parrizal from "../pages/queVisitar/Parrizal";
import Pesqueras from "../pages/queVisitar/Pesqueras";
import Layout from "../components/Layout";
import Formulario from "../pages/Contacto";

export default function RoutesCasa() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/imagenes" element={<ImagesAll />} />
        <Route path="/que-visitar" element={<QueVisitar />} />
        <Route path="/reservar" element={<Formulario />} />
        <Route path="/valderrobres" element={<Valderrobres />} />
        <Route path="/parrizal-beceite" element={<Parrizal />} />
        <Route path="/pesqueras" element={<Pesqueras />} />
      </Route>
    </Routes>
  );
}
