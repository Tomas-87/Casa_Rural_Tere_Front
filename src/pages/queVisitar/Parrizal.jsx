import { Link } from "react-router-dom";
import styles from "./Parrizal.module.css";

export default function Parrizal() {
  return (
    <>
      <section className={styles.parrizal}>
        <h2>Ruta senderista el Parrizal Puertos de Beceite</h2>
        <article>
          <img
            src="/Parrizal/parrizal_1.jpg"
            alt="Parrizal de Beceite, pasarelas sobre el río Matarraña"
          />
          <p>
            Descubre el Parrizal de Beceite, un rincón mágico donde caminarás
            entre cañones de roca y aguas turquesa. Una experiencia única a
            pocos minutos de la casa rural.
          </p>
        </article>

        <article>
          <img
            src="/Parrizal/parrizal_cascada.webp"
            alt="Parrizal de Beceite, pasarelas sobre el río Matarraña"
          />
          <p>
            Pequeñas cascadas de agua cristalina que fluyen entre formaciones
            rocosas, creando un entorno tranquilo y refrescante en pleno corazón
            del Parrizal.
          </p>
        </article>

        <article>
          <img
            src="/Parrizal/parrizal_verde.jpg"
            alt="Parrizal de Beceite, pasarelas sobre el río Matarraña"
          />
          <p>
            Recorrido por las pasarelas del Parrizal, un sendero accesible que
            permite disfrutar del paisaje entre cañones y aguas turquesa.
          </p>
        </article>

        <article>
          <img
            src="/Parrizal/parrizal-2.jpg"
            alt="Parrizal de Beceite, pasarelas sobre el río Matarraña"
          />
          <p>
            Pasarelas de madera suspendidas sobre el río, rodeadas de paredes de
            roca y aguas de color esmeralda que hacen único este paraje natural.
          </p>
        </article>

        <article>
          <img
            src="/Parrizal/parrizal-3.jpg"
            alt="Parrizal de Beceite, pasarelas sobre el río Matarraña"
          />
          <p>
            Impresionante cañón de roca donde el río Matarraña discurre entre
            paredes verticales, formando uno de los paisajes más espectaculares
            de la zona.
          </p>
        </article>
        <a
          href="https://entradasbeceite.arteyocio.com/ruta-del-parrizal/"
          className="entradas"
        >
          Comprar entradas Parrizal
        </a>
        <Link to="/que-visitar" className="volver">
          Volver a que visitar
        </Link>
      </section>
    </>
  );
}
