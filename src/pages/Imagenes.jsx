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

  const orden = ["t", "f", "s", "h", "c", "b", "d", "p"];

  const imagenesOrdenadas = [...imagenes].sort((a, b) => {
    const letraA = a.title?.charAt(0).toLowerCase() || "";
    const letraB = b.title?.charAt(0).toLowerCase() || "";
    return orden.indexOf(letraA) - orden.indexOf(letraB);
  });

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
