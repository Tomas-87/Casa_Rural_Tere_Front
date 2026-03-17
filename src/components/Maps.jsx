import styles from "./Maps.module.css";

export default function Maps() {
  return (
    <section className={styles.iframe}>
      <h2>Dónde encontrarnos</h2>
      <p>Valderrobres, Matarraña, Teruel</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.9967313203806!2d0.15255833757901366!3d40.87194593491747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a0910047cd4979%3A0xbfc4d5237cfa24d5!2sCasa%20Tere!5e0!3m2!1ses-419!2ses!4v1773786258976!5m2!1ses-419!2ses"
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Calle+Lepanto+2+Valderrobres+Teruel"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.comoLlegar}
      >
        Cómo llegar
      </a>
    </section>
  );
}
