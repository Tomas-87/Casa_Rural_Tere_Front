import styles from "./Pesqueras.module.css";
import { Link } from "react-router-dom";

export default function Pesqueras() {
  const fotosPesqueras = [
    "/pesqueras/mejores-pozas-del-matarrana_pesqueras.jpg",
    "/pesqueras/Piscinas naturales con cascada las pesqueras.webp",
    "/pesqueras/piscinas-naturales-las-pesqueras_1.jpg",
    "/pesqueras/zonas-de-bano-del-rio-algars-y-alrededores.jpg",
  ];

  return (
    <section className={styles.pesqueras}>
      <h2>Las Pesqueras</h2>
      <article>
        <img
          src="/pesqueras/Piscinas naturales con cascada las pesqueras.webp"
          alt="Pozas naturales de agua cristalina"
        />
        <p>
          Un rincón natural único donde el agua y la roca crean un paisaje
          espectacular. Las Pesqueras son una sucesión de pozas naturales de
          agua cristalina, ideales para disfrutar de la naturaleza, pasear o
          refrescarse en verano. Un lugar perfecto para desconectar y vivir la
          esencia del Matarraña.
        </p>
      </article>

      <article className={styles.ubicacion}>
        <h2>Ubicacion</h2>
        <div>
          <iframe
            className={styles.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.666091281445!2d0.20666577487225826!3d40.83529743006005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a09138dc7579e5%3A0xaf1de0df2675b12!2sEspacio%20Natural%20de%20La%20Pesquera!5e0!3m2!1ses-419!2ses!4v1774879658855!5m2!1ses-419!2ses"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>
            Situadas en el entorno de Beceite, en plena naturaleza del
            Matarraña, rodeadas de montañas, vegetación y aguas limpias. 🚗
            Distancia desde la casa A tan solo 15-20 minutos en coche desde
            Valderrobres, con acceso sencillo y bien señalizado.
          </p>
          <a
            href="https://maps.app.goo.gl/dRiSenVggnr3Ug1U7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Como llegar
          </a>
        </div>
      </article>

      <article className={styles.ul}>
        <ul>
          <h2>Que te vas a encontrar</h2>
          <li>Pozas naturales de agua cristalina</li>
          <li>Zonas de baño en plena naturaleza</li>
          <li>Senderos rodeados de bosque</li>
          <li>Un entorno tranquilo y muy cuidado</li>
        </ul>

        <ul>
          <h2>Consejos para la visita</h2>
          <li>Lleva calzado cómodo para caminar</li>
          <li>En verano, ve temprano para evitar gente</li>
          <li>Respeta el entorno (es un espacio protegido)</li>
          <li>Lleva agua y algo de comida si vas a pasar el día</li>
        </ul>
      </article>

      <article className={styles.imagenes}>
        {fotosPesqueras.map((i) => (
          <img
            key={i.alt}
            src={i}
            alt="Un paisaje único en el Matarraña las pozas de las pesqueras"
          />
        ))}
      </article>
      <div className={styles.dots}>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

      <div className={styles.reserva}>
        <p>
          Las Pesqueras son uno de los lugares más especiales del Matarraña.
          Tanto si buscas un paseo tranquilo como un día de naturaleza y agua,
          es una visita imprescindible durante tu estancia en Casa Rural Tere.
        </p>
        <a
          href="https://entradasbeceite.arteyocio.com/pozas-de-la-pesquera/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reserva tus entradas
        </a>
      </div>
      <Link to="/que-visitar" className="volver">
        Volver a que visitar
      </Link>
    </section>
  );
}
