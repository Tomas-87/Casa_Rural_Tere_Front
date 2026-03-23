import styles from "./Imagenes.module.css";
import { useState } from "react";

export default function ImagesAll({ casa }) {
  const [current, setCurrent] = useState(0);

  const imagenes = casa?.imagenes || [];

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % imagenes.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  if (!imagenes.length) return <p>No hay imágenes</p>;

  return (
    <>
      <section className={styles.container}>
        <button onClick={prevImage} className={styles.arrowLeft}>
          ◀
        </button>
        <div>
          <img src={imagenes[current].url} alt={imagenes[current].title} />
          <p>{imagenes[current].description}</p>
        </div>
        <button onClick={nextImage} className={styles.arrowRight}>
          ▶
        </button>
      </section>

      <section className={styles.mobile}>
        {imagenes?.map((i) => (
          <div key={i._id}>
            <img src={i.url} alt={i.title} />
            <p>{i.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
