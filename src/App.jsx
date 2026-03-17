import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { getCasa } from "./services/casaServices";

function App() {
  const [casa, setCasa] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const axiosCasa = async () => {
      try {
        const data = await getCasa();
        console.log(data);
        setCasa(data);
      } catch (error) {
        console.error(error);
        setError("No se pudo cargar la información");
      }
    };
    axiosCasa();
  }, []);

  if (error) return <h2>{error}</h2>;
  if (!casa) return <p>Cargando...</p>;

  return (
    <>
      <Home casa={casa} />
    </>
  );
}

export default App;
