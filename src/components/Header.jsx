import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ casa }) {
  const location = useLocation();

  const isImagenes = location.pathname === "/imagenes";

  return (
    <header className={isImagenes ? styles.headerImagenes : styles.headerHome}>
      <div className={styles.top}>
        <p className={styles.nombre}>Casa Rural en Valderrobres</p>

        <a
          href={`tel:${casa?.telefono}`}
          className={`${styles.telefono} hover`}
        >
          (+34) 612 34 56 78 <span>Llamar</span>
        </a>
      </div>
    </header>
  );
}
