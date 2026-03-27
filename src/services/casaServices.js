import axios from "axios";

const urlCasa = import.meta.env.VITE_URL_API;

export const getCasa = async () => {
  const response = await axios.get(urlCasa);
  return response.data;
};

export const sendReserva = async (form) => {
  try {
    const response = await axios.post(`${urlCasa}/reservas`, form);
    return response.data;
  } catch (error) {
    console.error(error);
    return (
      error.response?.data || {
        ok: false,
        message: "Error al enviar la reserva",
      }
    );
  }
};
