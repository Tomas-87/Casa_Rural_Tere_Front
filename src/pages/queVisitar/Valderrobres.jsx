import { Link } from "react-router-dom";
import styles from "./Valderrobres.module.css";

export default function Valderrobres() {
  return (
    <section className={styles.valde}>
      <h2>Valderrobres</h2>
      <article>
        <img
          src="/Entrada-puente-piedra.jpeg"
          alt="Entrada al casco antiguo de Valderrobres"
        />
        <p>
          Entrada a Valderrobres por su emblemático puente de piedra, con vistas
          al castillo y la iglesia.
        </p>
      </article>
      <article>
        <img src="/plaza de españa.jpg" alt="Plaza de España" />
        <p>
          Plaza de España, corazón de Valderrobres, con el ayuntamiento y su
          encanto histórico.
        </p>
      </article>
      <article>
        <img src="/calles de Valderrobres.jpg" alt="Rincones de Valderobres" />
        <p>
          Calles empedradas llenas de historia que invitan a pasear sin prisa,
          rodeadas de casas de piedra y rincones con encanto. Un recorrido por
          el corazón del pueblo donde cada esquina conserva el carácter
          tradicional del Matarraña.
        </p>
      </article>

      <article>
        <img src="/castillo.png" alt="Castillo de Valderrobres" />
        <div>
          <p>
            Castillo de Valderrobres, imponente fortaleza medieval que domina el
            casco histórico y ofrece unas vistas espectaculares del entorno. No
            dudes en visitar su interior te encantaran sus salas medievales.
          </p>
          <a
            className="entradas"
            href="https://entradas.castillovalderrobres.com/tienda/entradas/"
            target="_blank"
          >
            Comprar entradas Castillo
          </a>
        </div>
      </article>

      <article>
        <img src="/iglesia.jpg" alt="Iglesia Santa Maria la Mayor" />
        <p>
          Iglesia de Santa María la Mayor, templo gótico situado junto al
          castillo, uno de los edificios más emblemáticos del Matarraña.
        </p>
      </article>

      <article>
        <img
          src="/public/buitres/buitres.jpg"
          alt="El mayor espectaculo de buitres de España podras ver buitres de distintas clases"
        />
        <div className={styles.buyol}>
          <h3>Mas de Buyol</h3>
          <p>
            Disfruta de uno de los espectáculos naturales más impresionantes del
            Matarraña: la observación de buitres en su hábitat natural. En un
            entorno privilegiado, podrás ver estas majestuosas aves sobrevolando
            los cielos de Valderrobres y conocer de cerca su comportamiento en
            libertad, una experiencia única para amantes de la naturaleza y la
            fotografía.
          </p>
        </div>
      </article>
      <Link to="/que-visitar" className="volver">
        Volver a que visitar
      </Link>
    </section>
  );
}
