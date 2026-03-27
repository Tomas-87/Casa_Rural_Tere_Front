import { useState } from "react";
import { sendReserva } from "../services/casaServices";
import styles from "./Contacto.module.css";
import { useNavigate } from "react-router-dom";

const initialForm = {
  nombre: "",
  apellidos: "",
  email: "",
  telefono: "",
  entrada: "",
  salida: "",
  mensaje: "",
};

export default function Formulario() {
  const [form, setForm] = useState(initialForm);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    const data = await sendReserva(form);

    if (!data.ok) {
      setError(data.message);
      return;
    }
    setMensaje(data.message);
    setForm(initialForm);
    navigate("/");
  };

  return (
    <section className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={form.nombre}
            name="nombre"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            value={form.apellidos}
            onChange={handleChange}
            required
            name="apellidos"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            value={form.email}
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="telefono">Telefono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={form.telefono}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="entrada">Fecha de entrada</label>
          <input
            type="date"
            id="entrada"
            name="entrada"
            value={form.entrada}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="salida">Fecha de salida</label>
          <input
            type="date"
            name="salida"
            id="salida"
            value={form.salida}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="mensaje">Ingresa un mensaje</label>
          <textarea
            name="mensaje"
            id="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p className={styles.ok}>{mensaje}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </section>
  );
}
