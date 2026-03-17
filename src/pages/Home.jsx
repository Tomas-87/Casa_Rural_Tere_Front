import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../components/Header";

export const Home = ({ casa }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header />
      <main>
        <div className={styles.name}>
          <button onClick={() => setMenu(!menu)} className={styles.menu}>
            ☰
          </button>
          <h1>{casa?.nombre}</h1>
        </div>

        {casa?.imagenes
          ?.filter((i) => i.title === "Fachada")
          .map((item) => (
            <img
              key={item._id}
              src={item.url}
              alt={item.title}
              className={styles.fachada}
            />
          ))}

        <section className={styles.sectionImg}>
          {casa?.imagenes
            ?.filter(
              (i) =>
                i.title === "salon_3" ||
                i.title === "terraza" ||
                i.title === "habitacion_matrimonio_2" ||
                i.title === "habitacion_doble_2" ||
                i.title === "Cocina 2" ||
                i.title === "Ducha 2",
            )
            .sort((a, b) => b.title.localeCompare(a.title))
            .map((i) => (
              <div className={styles.fotosDestacadas} key={i._id}>
                <img src={i.url} alt={i.title} />
              </div>
            ))}
        </section>

        <div className={styles.verMasImg}>
          <a href="*******     *******">Ver más fotos</a>
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
          {casa?.review?.map((r) => (
            <ul key={r._id}>
              <li>{"⭐".repeat(r.puntuacion)}</li>
              <li>{r.nombre}</li>
              <li>{r.texto}</li>
            </ul>
          ))}
        </div>
      </main>
    </>
  );
};
