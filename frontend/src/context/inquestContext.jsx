import { createContext, useContext, useState } from "react";
import { createInquestRequest } from "../api/inquest";

const InquestContext = createContext();

export const useInquests = () => {
  const context = useContext(InquestContext);

  if (!context) {
    throw new Error("useInquests debería estar dentro de InquestProvider");
  }

  return context;
}

export function InquestProvider({ children }) {

  const [inquest, setInquest] = useState([]);

  const createInquest = async (inquest) => {
    const res = await createInquestRequest(inquest);
    console.log(res);
  };

  return (
    <InquestContext.Provider value={{
      inquest,
      createInquest
    }}>
      {children}
    </InquestContext.Provider>
  );
}