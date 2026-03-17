import { useState, useEffect } from "react";
import style from "./ImageSlider.module.css";

export default function ImgSlider({ casa }) {
  const [img, setImg] = useState(0);

  const ordenImg = [
    "Fachada",
    "salon_3",
    "terraza",
    "habitacion_matrimonio_2",
    "Cocina 2",
  ];

  const imagesSlider =
    casa?.imagenes
      ?.filter((i) => ordenImg.includes(i.title))
      .sort((a, b) => ordenImg.indexOf(a.title) - ordenImg.indexOf(b.title)) ||
    [];

  useEffect(() => {
    if (imagesSlider.length <= 1) return;
    const interval = setInterval(() => {
      setImg((prev) => (prev + 1) % imagesSlider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesSlider.length]);

  if (imagesSlider.length === 0) return null;

  return (
    <div className={style.slider}>
      {imagesSlider.map((item, index) => (
        <img
          key={item._id}
          src={item.url}
          alt={item.title}
          className={`${style.image} ${index === img ? style.active : ""}`}
        />
      ))}
    </div>
  );
}
