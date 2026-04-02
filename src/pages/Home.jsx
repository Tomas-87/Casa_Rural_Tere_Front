import styles from "./Home.module.css";
import ImagesSlider from "../components/ImageSlider";
import Maps from "../components/Maps";
import { Link } from "react-router-dom";
import { useCasa } from "../context/CasaContext";

export const Home = () => {
  const casa = useCasa();

  return (
    <>
      <main>
        <ImagesSlider casa={casa} />

        <div className={styles.verMasImg}>
          <Link to="/imagenes">Ver más fotos</Link>
        </div>

        <div className={styles.descripcion}>
          <h2>Valderrrobres, Toscana Española</h2>
          <p>{casa?.descripcion}</p>
          <p>Capacidad: {casa?.capacidad} Huéspedes</p>
        </div>

        <div className={styles.precio}>
          <p>
            <span>Temporada Baja: </span>
            {casa?.precio}€
          </p>
          {casa?.temporadas?.map((item, id) => (
            <p key={id}>
              <span>{item.nombre}: </span>
              {item.precio}€
            </p>
          ))}
        </div>

        <div className={styles.booking}>
          <h2>Puntuación en Booking</h2>
          {casa?.imagenes
            ?.filter((i) => i.title === "puntuacion")
            .map((p) => (
              <img
                key={p._id}
                src={p.url}
                alt={p.title}
                className={styles.nota}
              />
            ))}
          <a
            href="https://www.booking.com/hotel/es/casa-tere-valderrobres.es.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver opiniones en Booking
          </a>
        </div>
        <div className={styles.review}>
          <h2>Reseñas: Web</h2>
          {casa?.review?.map((r, index) => {
            const avatars = ["/Carlos.png", "/Ana.png", "/Javier.png"];
            return (
              <ul key={r._id}>
                <li>{"⭐".repeat(r.puntuacion)}</li>
                <li className={styles.li}>
                  <img src={avatars[index % avatars.length]} alt={r.nombre} />
                  {r.nombre}
                </li>
                <li>{r.texto}</li>
              </ul>
            );
          })}
        </div>

        <Maps />
      </main>
    </>
  );
};
