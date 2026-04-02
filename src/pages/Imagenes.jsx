import { useCasa } from "../context/CasaContext";
import styles from "./Imagenes.module.css";
import { useState } from "react";

export default function ImagesAll() {
  const casa = useCasa();
  const [current, setCurrent] = useState(0);

  const imagenes = casa?.imagenes || [];

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % imagenes.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  if (!imagenes.length) return <p>No hay imágenes</p>;

  const imagenesOrdenadas = [...imagenes].sort((a, b) =>
    (b.title || "").localeCompare(a.title || ""),
  );

  return (
    <>
      <section className={styles.container}>
        <button onClick={prevImage} className={styles.arrowLeft}>
          ◀
        </button>
        <div>
          <img
            src={imagenesOrdenadas[current].url}
            alt={imagenesOrdenadas[current].title}
          />
          <p>{imagenesOrdenadas[current].description}</p>
        </div>
        <button onClick={nextImage} className={styles.arrowRight}>
          ▶
        </button>
      </section>

      <section className={styles.mobile}>
        {imagenesOrdenadas.map((i) => (
          <div key={i._id}>
            <img src={i.url} alt={i.title} />
            <p>{i.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
