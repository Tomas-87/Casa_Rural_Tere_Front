import axios from "axios";

const urlCasa = "http://localhost:3001/api/casa";

export const getCasa = async () => {
  const response = await axios.get(urlCasa);
  return response.data;
};
