import { Link } from "react-router-dom";
import styles from "./Hamburger.module.css";

export default function Hamburger({ menu, setMenu, casa }) {
  return (
    <section className={styles.container}>
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
          </div>
        )}
        <h1>{casa?.nombre}</h1>
      </div>
    </section>
  );
}
