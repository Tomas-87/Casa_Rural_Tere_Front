import styles from "./Header.module.css";

export default function Header({ casa }) {
  return (
    <header>
      <div className={styles.top}>
        <p className={styles.nombre}>Casa Rural en Valderrobres</p>

        <a
          href={`tel:${casa?.telefono}`}
          className={`${styles.telefono} hover`}
        >
          (+34) 612 34 56 78 <span>Llamar</span>
        </a>
      </div>
    </header>
  );
}
