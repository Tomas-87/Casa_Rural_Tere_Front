import styles from "./Footer.module.css";

const Footer = ({ casa }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className="hover">
          Telefono:
          <a href={`tel:${casa?.telefono}`}>Contactar</a>
        </p>
        <p>Calle Lepanto Nº2 Valderrobres</p>
        <p className="hover">
          WhatsApp:
          <a href="https://wa.me/34612345678">Contactar</a>
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
