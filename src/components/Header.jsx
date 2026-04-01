import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ casa }) {
  const location = useLocation();

  const isImagenes = location.pathname === "/imagenes";
  const phone = import.meta.env.VITE_PHONE;

  return (
    <header className={isImagenes ? styles.headerImagenes : styles.headerHome}>
      <div className={styles.top}>
        <p className={styles.nombre}>Casa Rural en Valderrobres</p>

        <a href={`tel:+${phone}`} className={`${styles.telefono} hover`}>
          (+34) 669 25 38 38 <span>Llamar</span>
        </a>
      </div>
    </header>
  );
}
