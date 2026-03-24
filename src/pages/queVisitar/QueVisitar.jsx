import { Link } from "react-router-dom";
import Hamburger from "../../components/Hamburger";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./QueVisitar.module.css";

export default function QueVisitar({ casa }) {
  return (
    <section className={styles.link}>
      <h2>Qué visitar en el Matarraña</h2>
      <img src="/salt.jpg" alt="Cascada El Salt en la Portellada" />
      <div>
        <Link to="/valderrobres">Valderrobres</Link>
        <Link to="/parrizal-beceite">Parrizal de Beceite</Link>
        <Link to="/pesqueras">Las Pesqueras</Link>
      </div>
    </section>
  );
}
