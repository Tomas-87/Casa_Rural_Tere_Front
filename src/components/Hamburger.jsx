import { Link } from "react-router-dom";
import styles from "./Hamburger.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Hamburger({ casa }) {
  const location = useLocation();
  const isImagenes = location.pathname === "/imagenes";

  const [menu, setMenu] = useState(false);

  return (
    <section
      className={isImagenes ? styles.hamburgerImagenes : styles.hamburgerHome}
    >
      <div className={styles.name}>
        <button onClick={() => setMenu(!menu)} className={styles.menu}>
          ☰
        </button>

        {menu && (
          <div className={styles.menuDesplegable}>
            <Link to="/" onClick={() => setMenu(false)}>
              Inicio
            </Link>
            <Link to="/imagenes" onClick={() => setMenu(false)}>
              Todas las imágenes
            </Link>
            <Link to="/que-visitar" onClick={() => setMenu(false)}>
              Qué visitar
            </Link>
            <Link to="/reservar" onClick={() => setMenu(false)}>
              Reserva
            </Link>
          </div>
        )}
        <h1>{casa?.nombre}</h1>
      </div>
    </section>
  );
}
