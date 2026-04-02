import { Link } from "react-router-dom";
import Hamburger from "../../components/Hamburger";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./QueVisitar.module.css";

export default function QueVisitar({ casa }) {
  return (
    <section className={styles.link}>
      <h2>Qué visitar en el Matarraña</h2>
      <div className={styles.salt}>
        <img src="/salt.jpg" alt="Cascada El Salt en la Portellada" />
        <h3>El Salt de la Portellada</h3>
        <a
          href="https://www.google.com/maps/dir/C.+Lepanto,+2,+44580+Valderrobres,+Teruel/Salto+de+La+Portellada,+44589+Matarra%C3%B1a,+Teruel/@40.8779233,0.0775018,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12a090aeb29c3537:0x7107ef6aa8a8d496!2m2!1d0.1542757!2d40.8720582!1m5!1m1!1s0x12a09b000b544aad:0x700fdfeb3e6720f9!2m2!1d0.082668!2d40.8654794!3e0?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Como llegar
        </a>
      </div>
      <div>
        <Link to="/valderrobres">Valderrobres</Link>
        <Link to="/parrizal-beceite">Parrizal de Beceite</Link>
        <Link to="/pesqueras">Las Pesqueras</Link>
      </div>
    </section>
  );
}
