import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ casa }) => {
  const location = useLocation();

  const isImagenes = location.pathname === "/imagenes";
  const phone = import.meta.env.VITE_PHONE;

  return (
    <footer className={isImagenes ? styles.footerImagenes : styles.footerHome}>
      <div>
        <p className="hover">
          Telefono:
          <a href={`tel:+${phone}`}>Contactar</a>
        </p>
        <p>Calle Lepanto Nº2 Valderrobres</p>
        <p className="hover">
          WhatsApp:
          <a href={`https://wa.me/+${phone}`}>Contactar</a>
        </p>
      </div>
      <p>
        © {new Date().getFullYear()} Casa Rural Tere. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
