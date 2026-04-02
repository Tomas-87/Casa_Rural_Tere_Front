import { createContext, useContext } from "react";

const CasaContext = createContext();

export function CasaProvider({ children, value }) {
  return <CasaContext.Provider value={value}>{children}</CasaContext.Provider>;
}

export function useCasa() {
  return useContext(CasaContext);
}
