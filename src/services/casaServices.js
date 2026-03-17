import axios from "axios";

const urlCasa = import.meta.env.VITE_URL_API;

export const getCasa = async () => {
  const response = await axios.get(urlCasa);
  return response.data;
};
